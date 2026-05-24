import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiGithub, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { SectionHeader, NeonButton } from '../ui/index';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'talhaobaid1010@gmail.com', href: 'mailto:talhaob1010@gmail.com', color: '#00F5FF' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/talhaobaidafzal', href: 'https://github.com/talhaobaidafzal', color: '#A1A1AA' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/talhaobaidafzal', href: 'https://www.linkedin.com/in/talhaobaidafzal/', color: '#0A66C2' },
  { icon: FiMapPin, label: 'Location', value: 'Karachi, Pakistan', href: null, color: '#00FFA3' },
];

function InputField({ label, name, type = 'text', value, onChange, placeholder, multiline = false }) {
  const Component = multiline ? 'textarea' : 'input';
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#A1A1AA] text-xs font-semibold font-inter uppercase tracking-wider">{label}</label>
      <Component
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={multiline ? 5 : undefined}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-inter placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#00F5FF]/50 focus:bg-[#00F5FF]/5 transition-all duration-300 resize-none"
        required
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00F5FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#A1A1AA] font-inter text-sm leading-relaxed mb-6">
                Whether you have a project idea, a job opportunity, or just want to connect — my inbox is always open.
              </p>

              <div className="flex flex-col gap-5">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                          style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                        >
                          <item.icon style={{ color: item.color }} className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[#A1A1AA] text-[11px] font-inter uppercase tracking-wider">{item.label}</p>
                          <p className="text-white text-sm font-inter group-hover:text-[#00F5FF] transition-colors">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                        >
                          <item.icon style={{ color: item.color }} className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[#A1A1AA] text-[11px] font-inter uppercase tracking-wider">{item.label}</p>
                          <p className="text-white text-sm font-inter">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 md:p-10 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/40 to-transparent" />

              {sent ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <FiCheckCircle className="w-16 h-16 text-[#00FFA3]" />
                  <h3 className="text-white font-bold font-outfit text-xl">Message Sent!</h3>
                  <p className="text-[#A1A1AA] font-inter text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                    <InputField label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                    <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                  </div>
                  <InputField label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
                  <InputField label="Message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." multiline />

                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#00F5FF] to-[#7C3AED] text-white disabled:opacity-50 hover:shadow-lg hover:shadow-[#00F5FF]/20 transition-all duration-300"
                    whileHover={{ scale: sending ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
