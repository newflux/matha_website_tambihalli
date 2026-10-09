import { useState } from 'react';
import { Link } from 'react-router-dom';

const DataDeletion = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    comments: '',
    confirmDeletion: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulating network request for now
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        comments: '',
        confirmDeletion: false,
      });
    }, 1500);
  };

  return (
    <div className="deletion-page fade-in">
      <div className="deletion-card-wrapper">
        <div className="deletion-card">
          <div className="deletion-header">
            <span className="deletion-ornament">✦</span>
            <h1 className="deletion-title">Data Deletion Request</h1>
            <p className="deletion-subtitle">Manage Your Privacy</p>
          </div>

          <div className="deletion-body">
            {status === 'success' ? (
              <div className="deletion-success-state">
                <div className="deletion-success-icon-wrap">
                  <svg className="deletion-success-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="deletion-success-title">Request Received</h2>
                <p className="deletion-success-desc">
                  Your data deletion request has been successfully submitted. We will process it shortly and send a confirmation to your email.
                </p>
                <div className="deletion-actions">
                  <button onClick={() => setStatus('idle')} className="deletion-btn-home">
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="deletion-description">
                  We value your privacy. If you wish to have all your personal data permanently removed from our systems, please fill out the form below.
                </p>

                <form onSubmit={handleSubmit} className="deletion-form">
                  <div className="deletion-form-group">
                    <label htmlFor="fullName" className="deletion-label">Full Name *</label>
                    <div className="deletion-input-wrapper">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="deletion-input"
                        placeholder="Enter your full name"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="deletion-form-group">
                    <label htmlFor="email" className="deletion-label">Email Address *</label>
                    <div className="deletion-input-wrapper">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="deletion-input"
                        placeholder="Enter your email address"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="deletion-form-group">
                    <label htmlFor="phoneNumber" className="deletion-label">Phone Number</label>
                    <div className="deletion-input-wrapper">
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="deletion-input"
                        placeholder="Optional"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="deletion-form-group">
                    <label htmlFor="comments" className="deletion-label">Additional Comments (Optional)</label>
                    <div className="deletion-input-wrapper">
                      <textarea
                        id="comments"
                        name="comments"
                        rows={3}
                        value={formData.comments}
                        onChange={handleChange}
                        className="deletion-textarea"
                        placeholder="Any additional details..."
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="deletion-checkbox-group">
                    <input
                      type="checkbox"
                      id="confirmDeletion"
                      name="confirmDeletion"
                      required
                      checked={formData.confirmDeletion}
                      onChange={handleChange}
                      className="deletion-checkbox"
                      disabled={status === 'submitting'}
                    />
                    <label htmlFor="confirmDeletion" className="deletion-checkbox-label">
                      I understand that submitting this request will result in the permanent deletion of my account and all associated personal data. This action cannot be undone. *
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="deletion-submit-btn"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <span className="deletion-btn-loading">
                        <span className="deletion-spinner"></span>
                        Submitting...
                      </span>
                    ) : (
                      'Request Data Deletion'
                    )}
                  </button>

                  {status === 'error' && (
                    <div className="deletion-alert deletion-alert-error">
                      <div className="deletion-alert-content">
                        <strong>Submission Failed</strong>
                        <div className="deletion-alert-subtext">There was an error submitting your request. Please try again later.</div>
                      </div>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </div>

        <div className="deletion-footer-back">
          <Link to="/" className="deletion-back-link">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
