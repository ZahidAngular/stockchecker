"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Trash2, Send, CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { useModal } from "./ModalContext";

type Product = {
  id: number;
  name: string;
  paknSave: boolean;
  paknSaveUrl: string;
  newWorld: boolean;
  newWorldUrl: string;
  woolworths: boolean;
  woolworthsUrl: string;
};

const emptyProduct = (): Product => ({
  id: Date.now() + Math.random(),
  name: "",
  paknSave: false, paknSaveUrl: "",
  newWorld: false, newWorldUrl: "",
  woolworths: false, woolworthsUrl: "",
});

const retailers = [
  { label: "PAK'nSAVE", checked: "paknSave"   as const, url: "paknSaveUrl"   as const },
  { label: "New World",  checked: "newWorld"    as const, url: "newWorldUrl"    as const },
  { label: "Woolworths", checked: "woolworths"  as const, url: "woolworthsUrl"  as const },
];

export function OnboardingModal() {
  const { open, closeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);

  const [companyName,    setCompanyName]    = useState("");
  const [brandName,      setBrandName]      = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [nzbn,           setNzbn]           = useState("");
  const [fullName,       setFullName]       = useState("");
  const [positionRole,   setPositionRole]   = useState("");
  const [phone,          setPhone]          = useState("");
  const [email,          setEmail]          = useState("");
  const [products,       setProducts]       = useState<Product[]>([emptyProduct()]);
  const [subTerm,        setSubTerm]        = useState("");

  const lenis = useLenis();
  useEffect(() => {
    if (open) { lenis?.stop(); document.body.style.overflow = "hidden"; }
    else       { lenis?.start(); document.body.style.overflow = ""; }
    return ()  => { lenis?.start(); document.body.style.overflow = ""; };
  }, [open, lenis]);

  const addProduct    = () => setProducts(p => [...p, emptyProduct()]);
  const removeProduct = (id: number) => setProducts(p => p.filter(x => x.id !== id));
  const updateProduct = <K extends keyof Product>(id: number, key: K, val: Product[K]) =>
    setProducts(p => p.map(x => x.id === id ? { ...x, [key]: val } : x));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleClose  = () => {
    closeModal();
    setTimeout(() => {
      setSubmitted(false);
      setCompanyName(""); setBrandName(""); setCompanyAddress(""); setNzbn("");
      setFullName(""); setPositionRole(""); setPhone(""); setEmail("");
      setProducts([emptyProduct()]); setSubTerm("");
    }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="ob-backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[1000] bg-black/75 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[1001] flex items-center justify-center p-3 md:p-5">
            <motion.div
              key="ob-panel"
              initial={{ opacity: 0, scale: 0.93, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="ob-modal relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
              style={{ maxWidth: "min(99vw, 1400px)", maxHeight: "calc(100vh - 24px)" }}
            >
              {/* Ambient glow */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -top-24 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-[#c7f94d]/7 blur-[100px]" />
              </div>

              {/* ── Header ── */}
              <div className="ob-modal-header relative z-10 shrink-0 px-8 py-5">
                <div className="flex items-center">
                  <Image src="/logo.png" alt="Stock Checker" width={140} height={56}
                    className="h-10 w-auto object-contain" />
                  <h2 className="absolute left-1/2 -translate-x-1/2 font-display text-2xl font-bold text-white">
                    Onboarding Form
                  </h2>
                  <button onClick={handleClose} aria-label="Close"
                    className="ml-auto grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white/70 transition-all hover:bg-white/25 hover:text-white">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* ── Scrollable body ── */}
              <div className="relative z-10 flex-1 overflow-y-auto" data-lenis-prevent>
                {submitted ? (
                  <SuccessView onClose={handleClose} />
                ) : (
                  <form onSubmit={handleSubmit} className="px-6 py-8 md:px-10 md:py-10">

                    {/* Welcome */}
                    <p className="ob-welcome text-center text-sm leading-relaxed">
                      Welcome to Stock Checker! We&apos;re excited to have you on board.
                      With Stock Checker, you&apos;ll get real-time insights and smarter ways
                      to track and monitor stock availability across your favorite platforms.
                    </p>

                    {/* ── Company info ── */}
                    <p className="ob-section-label mt-8 text-[0.7rem] font-semibold uppercase tracking-widest">
                      Company Information
                    </p>
                    <div className="mt-2.5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <input className="ob-input" placeholder="Company Name"        required value={companyName}    onChange={e => setCompanyName(e.target.value)} />
                      <input className="ob-input" placeholder="Brand Name"          required value={brandName}      onChange={e => setBrandName(e.target.value)} />
                      <input className="ob-input" placeholder="Company Address"     required value={companyAddress} onChange={e => setCompanyAddress(e.target.value)} />
                      <input className="ob-input" placeholder="NZBN (if applicable)"        value={nzbn}           onChange={e => setNzbn(e.target.value)} />
                    </div>

                    {/* ── Contact info ── */}
                    <p className="ob-section-label mt-6 text-[0.7rem] font-semibold uppercase tracking-widest">
                      Contact Information
                    </p>
                    <div className="mt-2.5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <input className="ob-input" placeholder="Full Name"           required value={fullName}     onChange={e => setFullName(e.target.value)} />
                      <input className="ob-input" placeholder="Position/Role"       required value={positionRole} onChange={e => setPositionRole(e.target.value)} />
                      <input className="ob-input" type="tel"   placeholder="Phone Number"   required value={phone}        onChange={e => setPhone(e.target.value)} />
                      <input className="ob-input" type="email" placeholder="Email Address"  required value={email}        onChange={e => setEmail(e.target.value)} />
                    </div>

                    {/* ── Products ── */}
                    <p className="ob-section-label mt-6 text-[0.7rem] font-semibold uppercase tracking-widest">
                      Products
                    </p>
                    <div className="mt-2.5 space-y-4">
                      {products.map(product => (
                        <div key={product.id} className="ob-modal-card p-5">
                          <input
                            className="ob-input w-full"
                            placeholder="Product Name/Description"
                            required
                            value={product.name}
                            onChange={e => updateProduct(product.id, "name", e.target.value)}
                          />
                          <p className="ob-section-label mt-4 text-[0.65rem] font-semibold uppercase tracking-widest">
                            Ranged In
                          </p>
                          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {retailers.map(({ label, checked, url }) => (
                              <div key={label} className="flex flex-col gap-2">
                                <label className="flex cursor-pointer items-center gap-2.5">
                                  <input
                                    type="checkbox"
                                    className="ob-checkbox"
                                    checked={product[checked] as boolean}
                                    onChange={e => updateProduct(product.id, checked, e.target.checked)}
                                  />
                                  <span className="ob-retailer-label text-sm font-medium">{label}</span>
                                </label>
                                <AnimatePresence>
                                  {product[checked] && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <input
                                        className="ob-input w-full"
                                        type="url"
                                        placeholder="Enter Product Page URL"
                                        value={product[url] as string}
                                        onChange={e => updateProduct(product.id, url, e.target.value)}
                                      />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </div>
                          {products.length > 1 && (
                            <div className="mt-4 flex justify-end">
                              <button type="button" onClick={() => removeProduct(product.id)}
                                className="flex items-center gap-1.5 rounded-lg bg-red-500/12 px-3 py-1.5 text-xs font-medium text-red-400 transition-colors hover:bg-red-500/22">
                                <Trash2 className="h-3.5 w-3.5" /> Remove
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Add product */}
                    <button type="button" onClick={addProduct} className="ob-add-btn mt-3">
                      <Plus className="h-4 w-4" />
                      Add another product
                    </button>

                    {/* Subscription term */}
                    <p className="ob-section-label mt-6 text-[0.7rem] font-semibold uppercase tracking-widest">
                      Subscription
                    </p>
                    <div className="relative mt-2.5">
                      <select required value={subTerm} onChange={e => setSubTerm(e.target.value)}
                        className="ob-input w-full appearance-none pr-10">
                        <option value="" disabled>Subscription Term</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="annually">Annually</option>
                      </select>
                      <ChevronDown className="ob-select-icon pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                    </div>

                    {/* Terms */}
                    <div className="ob-terms-wrap mt-6 p-6 text-[0.78rem] leading-relaxed">
                      <h4 className="ob-terms-heading mb-3 text-sm font-semibold">Disclaimer &amp; Terms</h4>
                      <ul className="space-y-1.5 pl-4 list-disc">
                        <li><span className="ob-terms-bold font-semibold">Data Accuracy:</span> Stock Checker provides insights based on retailer data. Accuracy is not guaranteed at all times.</li>
                        <li><span className="ob-terms-bold font-semibold">Use of Information:</span> Data is for internal business use only and may not be shared without consent.</li>
                        <li><span className="ob-terms-bold font-semibold">Subscription Fees:</span> Fees are payable in advance according to the selected term and are non-refundable.</li>
                        <li><span className="ob-terms-bold font-semibold">Termination:</span> Either party may terminate with 30 days&apos; notice, except annual subscriptions which run full term.</li>
                        <li><span className="ob-terms-bold font-semibold">Confidentiality:</span> Stock Checker will keep client data confidential, except where disclosure is required by law.</li>
                      </ul>
                      <h4 className="ob-terms-heading mb-3 mt-5 text-sm font-semibold">Service Availability and Termination of Subscriptions</h4>
                      <ul className="space-y-1.5 pl-4 list-disc">
                        <li>In the event that the Software Platform is unable to retrieve or collect data from third-party websites for a continuous period exceeding thirty (30) calendar days, all active subscriptions shall be deemed automatically terminated. Upon such termination, Users shall no longer have access to the subscription services, and no further fees shall be charged beyond the termination date.</li>
                        <li>The Company shall not be held liable for any losses, damages, or claims arising from such termination, including but not limited to service unavailability caused by changes in third-party websites, data access restrictions, or technical limitations beyond the Company&apos;s reasonable control.</li>
                      </ul>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn-primary mt-6 w-full justify-center py-3.5 text-base">
                      Submit Registration
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function SuccessView({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-28 text-center">
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.05 }}
        className="grid h-24 w-24 place-items-center rounded-full bg-[rgb(var(--accent-rgb)/15%)] ring-2 ring-[rgb(var(--accent-rgb)/30%)]"
      >
        <CheckCircle2 className="h-12 w-12 text-[var(--color-lime)]" />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
        className="mt-7 font-display text-2xl font-bold text-ink"
      >
        Registration Submitted!
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26 }}
        className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft"
      >
        Thank you for joining Stock Checker. Our team will review your details
        and be in touch with you shortly.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34 }}
      >
        <button onClick={onClose} className="btn-primary mt-8 px-10">Done</button>
      </motion.div>
    </div>
  );
}
