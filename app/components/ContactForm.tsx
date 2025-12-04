"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      setResult("Failed to send message.");
    }
    
    setLoading(false);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">Message Sent!</h3>
        <p className="text-green-600 dark:text-green-300 mt-2">
            Thanks for reaching out. I'll get back to you soon.
        </p>
        <button 
            onClick={() => setSuccess(false)}
            className="mt-6 text-sm font-medium text-green-700 underline"
        >
            Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left max-w-md mx-auto">
      
      <input type="hidden" name="access_key" value="14140100-f5ae-4591-bad4-e33628d70255" />
      
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="your@email.com"
          className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea 
          name="message" 
          required 
          rows={4}
          placeholder="How can I help you?"
          className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
        ></textarea>
      </div>

      {result && <p className="text-red-500 text-sm">{result}</p>}

      <button 
        type="submit" 
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
            <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
            </>
        ) : (
            <>
                Send Message
                <Send className="w-4 h-4" />
            </>
        )}
      </button>
    </form>
  );
}