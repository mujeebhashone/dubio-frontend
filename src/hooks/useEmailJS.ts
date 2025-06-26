import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailSubmissionState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

interface UseEmailJSReturn extends EmailSubmissionState {
  submitEmail: (email: string, source?: string) => Promise<void>;
  resetState: () => void;
}

export const useEmailJS = (): UseEmailJSReturn => {
  const [state, setState] = useState<EmailSubmissionState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  // EmailJS configuration (you'll need to replace these with your actual values)
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_kjzof7p';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_87xmj99';
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'LmM-_j9Cdkh4wvADu';

  const submitEmail = async (email: string, source: string = 'website'): Promise<void> => {
    setState({ isLoading: true, isSuccess: false, error: null });

    try {
      const templateParams = {
        user_email: email,
        source: source,
        to_name: 'Dubio Team',
        from_name: 'Dubio Waitlist',
        message: `New waitlist signup from ${source}`,
        timestamp: new Date().toISOString(),
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setState({ isLoading: false, isSuccess: true, error: null });
    } catch (error) {
      console.error('EmailJS error:', error);
      console.error('Service ID:', SERVICE_ID);
      console.error('Template ID:', TEMPLATE_ID);
      console.error('Public Key:', PUBLIC_KEY);
      setState({
        isLoading: false,
        isSuccess: false,
        error: 'Failed to join waitlist. Please check console for details.',
      });
    }
  };

  const resetState = () => {
    setState({ isLoading: false, isSuccess: false, error: null });
  };

  return {
    ...state,
    submitEmail,
    resetState,
  };
}; 