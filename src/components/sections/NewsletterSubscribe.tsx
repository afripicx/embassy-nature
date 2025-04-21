import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    
    // Simulating form submission
    setStatus('success');
    setEmail('');
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-3 bg-green-800 border border-green-700 rounded-md 
              text-white placeholder-green-400 focus:outline-none focus:ring-2 
              focus:ring-green-400 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5
              bg-green-600 hover:bg-green-500 rounded-md text-white
              transition-colors duration-200"
            aria-label="Subscribe"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        
        {status === 'success' && (
          <p className="text-green-300 text-sm">Thanks for subscribing!</p>
        )}
        
        {status === 'error' && (
          <p className="text-red-300 text-sm">Please enter a valid email address.</p>
        )}
      </form>
    </div>
  );
};

export default NewsletterSubscribe;