"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSpotify, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "d8bf5578-9837-451a-9913-819867186047");
      formData.append("subject", "New Contact from A.R. Ameen Portfolio");
      formData.append("from_name", "A.R. Ameen Website Contact");
      
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24 max-w-4xl min-h-[70vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-wider mb-6">
          Get in <span className="text-accent italic">Touch</span>
        </h1>
        <div className="h-1 w-20 bg-accent opacity-50 mx-auto mb-6" />
        <p className="text-white/60 font-light max-w-lg mx-auto">
          Connect with A. R. Ameen for bookings, collaborations, or simply to show your love for the music.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-secondary/50 p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-2xl"
        >
          <h2 className="text-xl font-heading text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4 w-full">Social Connect</h2>
          <div className="flex gap-6 justify-center">
            <a href="https://open.spotify.com/artist/0pO2eJn9QBtNRVdLxI1nrE?si=eoYZMyYzS7WWA_XqdbKFBw" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-black hover:scale-110 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <FaSpotify size={24} />
            </a>
            <a href="https://www.youtube.com/@ARAmeenOfficial" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-black hover:scale-110 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.instagram.com/arrameen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-black hover:scale-110 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/arrameen" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-black hover:scale-110 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <FaXTwitter size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-secondary/50 p-8 rounded-2xl border border-white/5 flex flex-col justify-center backdrop-blur-sm shadow-2xl"
        >
          <h2 className="text-xl font-heading text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
            <HiMail className="text-accent" size={24} />
            Inquiries
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Your Name" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors w-full placeholder:text-white/30"
            />
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your Email" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors w-full placeholder:text-white/30"
            />
            <textarea 
              name="message"
              required
              rows="4" 
              placeholder="Message" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors w-full placeholder:text-white/30 resize-none"
            ></textarea>
            
            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-lg text-sm text-center mt-2">
                Message sent successfully!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm text-center mt-2">
                Something went wrong. Please try again later.
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-accent text-black font-semibold uppercase tracking-widest py-3 rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-shadow mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
