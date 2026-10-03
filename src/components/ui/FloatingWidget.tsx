"use client";

import { useState, useEffect } from "react";
import { MessageCircle, PhoneCall, X, Send, User, Phone, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.993.587 1.936.879 3.092.879 3.181 0 5.767-2.586 5.767-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.374 8.167c-.14.394-.716.744-1.002.775-.285.032-.656.147-2.227-.506-1.572-.654-2.584-2.254-2.662-2.358-.078-.104-.633-.842-.633-1.606 0-.764.399-1.14.541-1.294.142-.154.31-.193.414-.193.104 0 .208.001.299.006.096.005.225-.037.352.268.13.313.444 1.082.483 1.161.039.078.065.17.013.273-.052.104-.078.169-.156.26-.078.091-.164.204-.234.273-.078.077-.16.161-.069.317.091.156.404.667.868 1.079.596.53 1.098.694 1.254.772.156.078.247.065.338-.039.091-.104.39-.455.494-.611.104-.156.208-.13.35-.078.143.052.909.428 1.065.506.156.078.26.117.299.182.039.065.039.377-.101.771z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.662 1.449 5.176L2 22l4.957-1.413C8.423 21.498 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.636 0-3.167-.47-4.464-1.282l-.32-.201-2.946.839.816-2.859-.22-.351C3.967 14.85 3.5 13.473 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
    </svg>
  );
}

export function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [mode, setMode] = useState<"chat" | "call" | null>(null);
  
  // Chat state
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<{sender: "bot"|"user", text: string}[]>([
    { sender: "bot", text: "Hello! How can we help you today?" }
  ]);

  // Call simulation state
  const [callState, setCallState] = useState<"dialing" | "connected" | "callback">("dialing");
  const [callbackNumber, setCallbackNumber] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTeaser(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleChat = () => {
    if (isOpen && mode === "chat") {
      setIsOpen(false);
      setMode(null);
    } else {
      setIsOpen(true);
      setMode("chat");
      setShowTeaser(false);
    }
  };

  const startCallSimulation = () => {
    setMode("call");
    setCallState("dialing");
    
    // Simulate ringing then connecting or fallback
    setTimeout(() => {
      setCallState("connected");
    }, 3000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: "user", text: messageInput }]);
    setMessageInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: "bot", 
        text: "Thank you for reaching out! A representative will connect with you shortly." 
      }]);
    }, 1000);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackNumber.trim()) return;
    setCallState("callback");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Expanded Modal */}
      {isOpen && mode === "chat" && (
        <div className="bg-background border border-border shadow-2xl rounded-2xl w-[320px] sm:w-[360px] h-[450px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Sheesh Support</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs opacity-80">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={startCallSimulation} className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors" title="Call AI Agent">
                <PhoneCall className="h-4 w-4" />
              </button>
              <button onClick={toggleChat} className="text-primary-foreground/70 hover:text-primary-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  msg.sender === "user" 
                    ? "bg-primary text-primary-foreground rounded-br-sm" 
                    : "bg-card border border-border text-foreground rounded-bl-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-border bg-background flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="flex-1 bg-muted/50 border border-border rounded-full px-4 py-2 text-sm outline-none focus:border-primary transition-colors"
            />
            <button type="submit" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shrink-0">
              <Send className="h-4 w-4 ml-0.5" />
            </button>
          </form>
        </div>
      )}

      {/* Expanded Call Modal */}
      {isOpen && mode === "call" && (
        <div className="bg-background border border-border shadow-2xl rounded-2xl w-[320px] p-6 flex flex-col items-center justify-center text-center animate-in slide-in-from-bottom-5 fade-in duration-300 relative">
          <div className="absolute top-4 right-4">
             <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {callState === "dialing" && (
            <div className="flex flex-col items-center py-4">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-30" />
                <Phone className="h-8 w-8 text-green-500 animate-pulse" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Calling Support...</h3>
              <p className="text-muted-foreground text-sm">Ringing Sheesh Exports</p>
            </div>
          )}

          {callState === "connected" && (
            <div className="flex flex-col items-center w-full">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <User className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Agents are Busy</h3>
              <p className="text-muted-foreground text-sm mb-6">
                All our representatives are currently assisting other clients. Please request a callback or dial directly.
              </p>
              
              <div className="w-full space-y-4">
                <a href="tel:+919826270888" className={`w-full ${buttonVariants({ variant: "outline" })} font-bold`}>
                  Dial +91-98262-70888
                </a>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or</span></div>
                </div>
                <form onSubmit={handleCallbackSubmit} className="flex gap-2">
                  <input 
                    type="tel" 
                    placeholder="Your Phone Number" 
                    value={callbackNumber}
                    onChange={(e) => setCallbackNumber(e.target.value)}
                    required
                    className="flex-1 bg-muted/50 border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary w-full min-w-0"
                  />
                  <button type="submit" className={`shrink-0 ${buttonVariants()}`}>
                    Call Me
                  </button>
                </form>
              </div>
            </div>
          )}

          {callState === "callback" && (
            <div className="flex flex-col items-center w-full py-6">
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">Callback Scheduled</h3>
              <p className="text-muted-foreground text-sm">
                We'll call you back at {callbackNumber} shortly.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-end gap-4 relative">
        {/* Teaser */}
        {showTeaser && !isOpen && (
          <div className="absolute bottom-full right-0 mb-4 bg-card border border-border shadow-lg p-3 rounded-2xl rounded-br-sm w-[200px] animate-in slide-in-from-bottom-2 fade-in">
            <p className="text-sm text-foreground font-medium">Hey there! How can we help you today?</p>
            <button onClick={() => setShowTeaser(false)} className="absolute -top-2 -right-2 bg-muted rounded-full p-0.5 border border-border text-muted-foreground hover:text-foreground">
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <a 
          href="https://wa.me/919039920069"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 bg-[#25D366] text-white"
          aria-label="WhatsApp Support"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>

        <button 
          onClick={toggleChat}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 relative ${
            isOpen && mode === "chat" ? "bg-muted text-foreground border border-border" : "bg-primary text-primary-foreground"
          }`}
          aria-label="Chat Support"
        >
          {!isOpen && <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full animate-pulse" />}
          {isOpen && mode === "chat" ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>
    </div>
  );
}
