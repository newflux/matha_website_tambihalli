import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const getInitialLinkError = (searchParams: URLSearchParams): string | null => {
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  if (hash && hash.includes('error=')) {
    const hashParams = new URLSearchParams(hash.startsWith('#') ? hash.slice(1) : hash);
    const errorDesc = hashParams.get('error_description') || 'This password reset link has expired or is invalid.';
    return decodeURIComponent(errorDesc.replace(/\+/g, ' '));
  }

  const queryError = searchParams.get('error_description') || searchParams.get('error');
  if (queryError) {
    return decodeURIComponent(queryError.replace(/\+/g, ' '));
  }

  return null;
};

const ResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [linkError, setLinkError] = useState<string | null>(() => getInitialLinkError(searchParams));

  useEffect(() => {
    // 1. Handle PKCE flow if ?code= is present in query parameters
    const code = searchParams.get('code');
    if (code && isSupabaseConfigured) {
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        if (error) {
          setLinkError(error.message || 'The password reset link is invalid or has expired.');
        }
      });
    }

    // 2. Listen for Supabase auth state change (PASSWORD_RECOVERY event)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setLinkError(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!isSupabaseConfigured) {
      setErrorMessage(
        'Supabase is not configured yet. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables.'
      );
      return;
    }

    if (newPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify and try again.');
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        throw error;
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to update password. The link may have expired.';
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-page fade-in">
      <div className="reset-card-wrapper">
        <div className="reset-card">
          {/* Card Header */}
          <div className="reset-header">
            <span className="reset-ornament" aria-hidden="true">✦ ✦ ✦</span>
            <h1 className="reset-title">Sriman Madhava Teertha Matha</h1>
            <p className="reset-subtitle">Reset Your Account Password</p>
          </div>

          <div className="reset-body">
            {/* Supabase Missing Configuration Warning (if not yet configured) */}
            {!isSupabaseConfigured && (
              <div className="reset-config-notice">
                <strong>Setup Note:</strong> Connect this website to your Supabase project by adding{' '}
                <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to your environment variables.
              </div>
            )}

            {/* Expired / Invalid Link Alert */}
            {linkError && (
              <div className="reset-alert reset-alert-error" role="alert">
                <div className="reset-alert-icon">⚠️</div>
                <div className="reset-alert-content">
                  <strong>Link Expired or Invalid</strong>
                  <p>{linkError}</p>
                  <p className="reset-alert-subtext">
                    Please open the Matha Mobile App and request a new password reset link.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message from Submit */}
            {errorMessage && (
              <div className="reset-alert reset-alert-error" role="alert">
                <div className="reset-alert-icon">⚠️</div>
                <div className="reset-alert-content">
                  <p>{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Success State */}
            {isSuccess ? (
              <div className="reset-success-state">
                <div className="reset-success-icon-wrap" aria-hidden="true">
                  <svg
                    className="reset-success-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="reset-success-title">Password Updated!</h2>
                <p className="reset-success-desc">
                  Your password has been reset successfully.
                  <br />
                  You can now open the <strong>Matha Mobile App</strong> and log in with your new password.
                </p>
                <div className="reset-actions">
                  <Link to="/" className="reset-btn-home">
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              /* Password Reset Form */
              <form onSubmit={handleSubmit} className="reset-form" noValidate>
                <div className="reset-form-group">
                  <label htmlFor="newPassword" className="reset-label">
                    New Password
                  </label>
                  <div className="reset-input-wrapper">
                    <input
                      id="newPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Minimum 6 characters"
                      required
                      minLength={6}
                      disabled={Boolean(linkError) || isLoading}
                      className="reset-input"
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="reset-toggle-pwd"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="reset-form-group">
                  <label htmlFor="confirmPassword" className="reset-label">
                    Confirm Password
                  </label>
                  <div className="reset-input-wrapper">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter new password"
                      required
                      minLength={6}
                      disabled={Boolean(linkError) || isLoading}
                      className="reset-input"
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="reset-toggle-pwd"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {confirmPassword && newPassword !== confirmPassword && (
                    <p className="reset-hint-error">Passwords do not match</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={Boolean(linkError) || isLoading}
                  className="reset-submit-btn"
                >
                  {isLoading ? (
                    <span className="reset-btn-loading">
                      <span className="reset-spinner" aria-hidden="true" />
                      UPDATING...
                    </span>
                  ) : (
                    'UPDATE PASSWORD'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Back Link */}
        <div className="reset-footer-back">
          <Link to="/" className="reset-back-link">
            ← Return to Matha Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
