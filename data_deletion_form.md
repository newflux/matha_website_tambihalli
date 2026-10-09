# Data Deletion Request Form

Here is a guide on what questions to ask and a complete React component you can use for your website.

## Questions to Ask on the Form

To securely and accurately process a data deletion request, you should ask for the following information:

1.  **Full Name:** To identify the user.
2.  **Email Address:** The primary email associated with their account. This is critical for locating their data.
3.  **Phone Number (Optional):** As a secondary method to verify their identity if the email is insufficient.
4.  **Confirmation Statement:** A mandatory checkbox ensuring they understand the consequences (e.g., "I understand that deleting my data is permanent and cannot be undone.").
5.  **Additional Details (Optional):** A text area if they want to specify anything or provide feedback on why they are leaving.

---

## React Component Code

Below is a complete React component (`DataDeletionForm.jsx` or `DataDeletionForm.tsx`) that you can copy and paste into your website's codebase. It includes basic styling using plain CSS.

```jsx
import React, { useState } from 'react';

const DataDeletionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    comments: '',
    confirmDeletion: false,
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // TODO: Replace this with your actual API call to submit the request
      // await fetch('/api/request-data-deletion', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      // });
      
      // Simulating network request
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
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={styles.container}>
        <h2>Request Received</h2>
        <p>Your data deletion request has been successfully submitted. We will process it shortly and send a confirmation to your email.</p>
        <button onClick={() => setStatus('')} style={styles.button}>Submit Another Request</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Data Deletion Request</h2>
      <p style={styles.description}>
        We value your privacy. We collect your name, email, age, and phone number solely for internal use and do not sell it to third parties. 
        If you wish to have all your personal data permanently removed from our systems, please fill out the form below.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="fullName" style={styles.label}>Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="phoneNumber" style={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="comments" style={styles.label}>Additional Comments (Optional)</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            value={formData.comments}
            onChange={handleChange}
            style={styles.textarea}
          />
        </div>

        <div style={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="confirmDeletion"
            name="confirmDeletion"
            required
            checked={formData.confirmDeletion}
            onChange={handleChange}
            style={styles.checkbox}
          />
          <label htmlFor="confirmDeletion" style={styles.checkboxLabel}>
            I understand that submitting this request will result in the permanent deletion of my account and all associated personal data. This action cannot be undone. *
          </label>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'} 
          style={status === 'submitting' ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
        >
          {status === 'submitting' ? 'Submitting...' : 'Request Data Deletion'}
        </button>
        
        {status === 'error' && (
          <p style={styles.errorText}>There was an error submitting your request. Please try again later.</p>
        )}
      </form>
    </div>
  );
};

// Basic inline styles (You can replace these with your own CSS or Tailwind classes)
// let us use the css and styling acc to the website 
const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff', 
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  description: {
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#333',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'vertical',
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginTop: '10px',
  },
  checkbox: {
    marginTop: '4px',
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.4',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#dc2626',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.2s',
  },
  buttonDisabled: {
    backgroundColor: '#ef4444',
    cursor: 'not-allowed',
    opacity: 0.7,
  },
  errorText: {
    color: '#dc2626',
    fontSize: '14px',
    marginTop: '10px',
  }
};

export default DataDeletionForm;
```
