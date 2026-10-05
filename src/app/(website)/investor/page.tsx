"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Briefcase,
  FileSignature,
  ArrowRight,
  ArrowUpRight,
  Building,
  Users,
  BookOpen,
  ShieldCheck,
  FileSpreadsheet,
  MapPin,
  Phone,
  Mail,
  Search,
  Globe,
} from "lucide-react";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HERO SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 lg:pb-24 bg-foreground text-background">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <Image
        loading="lazy"
        src="/images/investor/investor.webp"
        alt="Investor Relations Corporate Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/80" />
    </div>

    <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
      <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">
        Investor Relations
      </span>
      <h1 className="font-heading text-5xl lg:text-7xl font-black mb-8 leading-[1.1] max-w-4xl text-white">
        Corporate Governance,
        <br />
        Financial Disclosures &<br />
        Shareholder Information
      </h1>
      <p className="text-xl lg:text-2xl text-white/70 font-light max-w-3xl leading-relaxed mb-16">
        Access company reports, offer documents, governance disclosures, policies, financial
        statements, contracts and investor resources.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/20 text-white">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
            Last Updated
          </span>
          <span className="font-heading text-xl font-bold">Oct 12, 2026</span>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
            Exchange
          </span>
          <span className="font-heading text-xl font-bold">NSE / BSE</span>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
            Listing Status
          </span>
          <span className="font-heading text-xl font-bold">IPO Bound</span>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
            CIN Number
          </span>
          <span className="font-heading text-xl font-bold text-white/70">
            U01100KA2021PTC147820
          </span>
        </div>
      </div>
    </div>
  </section>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DIRECTORY SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const DIRECTORY_ITEMS = [
  { title: "Offer Documents", count: "6 Documents", icon: BookOpen, id: "offer-documents" },
  { title: "Annual Reports", count: "5 Documents", icon: FileText, id: "annual-reports" },
  { title: "Annual Returns", count: "4 Documents", icon: FileSpreadsheet, id: "annual-returns" },
  {
    title: "Financial Statements",
    count: "4 Documents",
    icon: Building,
    id: "financial-statements",
  },
  { title: "Governance & Board", count: "8 Profiles", icon: Users, id: "governance" },
  { title: "Policies", count: "12 Documents", icon: ShieldCheck, id: "policies" },
  {
    title: "Material Documents",
    count: "22 Documents",
    icon: FileSignature,
    id: "material-documents",
  },
  { title: "Material Contracts", count: "10 Contracts", icon: Briefcase, id: "material-contracts" },
  { title: "Investor Contact", count: "2 Contacts", icon: Phone, id: "contact" },
];

const DirectorySection = () => (
  <section className="py-24 bg-background border-b border-border">
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
      <h2 className="font-heading text-3xl font-bold mb-12">Investor Resource Directory</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DIRECTORY_ITEMS.map((item, idx) => (
          <a
            key={idx}
            href={`#${item.id}`}
            className="group p-8 border border-border bg-card hover:border-primary transition-all duration-300 block"
          >
            <item.icon className="w-8 h-8 text-primary mb-6" />
            <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-8">{item.count}</p>
            <div className="flex items-center text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
              Explore{" "}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// OFFER DOCUMENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const OFFER_DOCUMENTS = [
  {
    title: "DRHP",
    desc: "Draft Red Herring Prospectus filed with SEBI.",
    date: "Oct 2026",
    url: "/pdfs/DRHP.pdf",
  },
  { title: "RHP", desc: "Red Herring Prospectus.", date: "Nov 2026", url: "/pdfs/RHP.pdf" },
  {
    title: "Abridged Prospectus",
    desc: "Summary of the Red Herring Prospectus.",
    date: "Nov 2026",
    url: "/pdfs/Abridged-Prospectus.pdf",
  },
  {
    title: "Prospectus",
    desc: "Final Prospectus filed with ROC.",
    date: "Dec 2026",
    url: "/pdfs/Prospectus.pdf",
  },
  { title: "GID", desc: "General Information Document.", date: "Oct 2026", url: "/pdfs/GID.pdf" },
  {
    title: "Advertisement",
    desc: "Pre-Issue Advertisement.",
    date: "Nov 2026",
    url: "/pdfs/Advertisement.pdf",
  },
];

const OfferDocumentsSection = () => (
  <section id="offer-documents" className="py-12 bg-muted/30 border-b border-border">
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
      <header className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
          Section 01
        </span>
        <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase">Offer Documents</h2>
      </header>
      <div className="flex flex-col border border-border bg-background divide-y divide-border shadow-sm">
        {OFFER_DOCUMENTS.map((doc, idx) => (
          <a
            key={idx}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center justify-between py-2 px-6 sm:px-8 hover:bg-muted/30 transition-colors gap-6"
          >
            <div className="flex items-start sm:items-center gap-5 flex-1">
              <span className="inline-flex items-center justify-center p-3 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 shrink-0">
                <FileText className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {doc.title}
                </h3>
                <p className="text-muted-foreground text-sm">{doc.desc}</p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto shrink-0 border-t border-border sm:border-0 pt-4 sm:pt-0 mt-2 sm:mt-0">
              <span className="text-xs text-muted-foreground font-mono bg-muted px-2.5 py-1 rounded-sm">
                {doc.date}
              </span>
              <div className="flex items-center text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                View PDF{" "}
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ANNUAL REPORTS (TIMELINE)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ANNUAL_REPORTS = [
  { year: "FY 2025-26", title: "Annual Report", url: "/pdfs/AR-25-26.pdf" },
  { year: "FY 2024-25", title: "Annual Report", url: "/pdfs/AR-24-25.pdf" },
  { year: "FY 2023-24", title: "Annual Report", url: "/pdfs/AR-23-24.pdf" },
  { year: "FY 2022-23", title: "Annual Report", url: "/pdfs/AR-22-23.pdf" },
  { year: "FY 2021-22", title: "Annual Report", url: "/pdfs/AR-21-22.pdf" },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ANNUAL RETURNS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ANNUAL_RETURNS = [
  { year: "FY 2024-25", title: "Annual Return", url: "/pdfs/Return-24-25.pdf" },
  { year: "FY 2023-24", title: "Annual Return", url: "/pdfs/Return-23-24.pdf" },
  { year: "FY 2022-23", title: "Annual Return", url: "/pdfs/Return-22-23.pdf" },
  { year: "FY 2021-22", title: "Annual Return", url: "/pdfs/Return-21-22.pdf" },
];

const AnnualFilingsSection = () => (
  <section id="annual-filings" className="py-24 bg-background border-b border-border">
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Annual Reports */}
        <div>
          <header className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
              Section 02
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase">
              Annual Reports
            </h2>
          </header>
          <div className="relative border-l border-border pl-8 ml-4 md:ml-0 md:pl-12 space-y-12 py-4">
            {ANNUAL_REPORTS.map((report, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[38px] md:-left-[54px] top-2 group-hover:bg-primary transition-colors" />
                <a
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block max-w-2xl"
                >
                  <span className="text-sm font-bold text-primary mb-1 block">{report.year}</span>
                  <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {report.title}
                  </h3>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                    Open PDF <ArrowUpRight className="w-3 h-3 ml-2" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Annual Returns */}
        <div>
          <header className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
              Section 03
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase">
              Annual Returns
            </h2>
          </header>
          <div className="relative border-l border-border pl-8 ml-4 md:ml-0 md:pl-12 space-y-12 py-4">
            {ANNUAL_RETURNS.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[38px] md:-left-[54px] top-2 group-hover:bg-primary transition-colors" />
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block max-w-2xl"
                >
                  <span className="text-sm font-bold text-primary mb-1 block">{item.year}</span>
                  <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                    Open PDF <ArrowUpRight className="w-3 h-3 ml-2" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// GOVERNANCE & KMP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const DIRECTORS = [
  {
    name: "Shabbar Sheikh",
    role: "Managing Director",
    email: "shabbar@sheeshexports.com",
    image: "/images/about/shabbar_sheikh.jpg",
  },
  {
    name: "Tariq Mahmood",
    role: "Whole Time Director",
    email: "tariq@sheeshexports.com",
    image: "/images/about/male_exec.jpg",
  },
  {
    name: "Fatima Sheikh",
    role: "Non-Executive Director",
    email: "fatima@sheeshexports.com",
    image: "/images/about/female_exec.jpg",
  },
  {
    name: "Zainab Ali",
    role: "Whole Time Director",
    email: "zainab@sheeshexports.com",
    image: "/images/about/female_exec.jpg",
  },
  {
    name: "Imran Khan",
    role: "Independent Director",
    email: "imran@sheeshexports.com",
    image: "/images/about/male_exec.jpg",
  },
  {
    name: "Omar Farooq",
    role: "Independent Director",
    email: "omar@sheeshexports.com",
    image: "/images/about/male_exec.jpg",
  },
];

const KMP = [
  {
    name: "Salman Qureshi",
    role: "Chief Financial Officer",
    email: "salman@sheeshexports.com",
    image: "/images/about/male_exec.jpg",
  },
  {
    name: "Ayesha Rahman",
    role: "Company Secretary & Compliance Officer",
    email: "ayesha@sheeshexports.com",
    image: "/images/about/female_exec.jpg",
  },
];

interface PersonCardProps {
  name: string;
  role: string;
  email?: string;
  image?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, role, email, image }) => (
  <div className="group flex flex-col sm:flex-row sm:items-center gap-6 p-6 border border-border bg-background hover:border-primary transition-colors h-full">
    <div className="w-full sm:w-28 sm:h-28 aspect-square sm:aspect-auto relative overflow-hidden shrink-0 bg-muted border border-border group-hover:border-primary transition-colors">
      <Image
        loading="lazy"
        src={image || "/images/sheesh-logo.webp"}
        alt={name}
        fill
        sizes="(max-width: 640px) 100vw, 112px"
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="flex-1 min-w-0 flex flex-col justify-center">
      <h4 className="font-heading text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
        {name}
      </h4>
      <p className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-widest mt-1">
        {role}
      </p>
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-xs text-muted-foreground mt-2 break-all hover:text-primary transition-colors flex items-start sm:items-center gap-1.5"
        >
          <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5 sm:mt-0" />
          <span>{email}</span>
        </a>
      )}
    </div>
  </div>
);

const GovernanceSection = () => (
  <section id="governance" className="py-12 bg-background border-b border-border">
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
      <header className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
          Section 04
        </span>
        <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase max-w-3xl leading-tight">
          Directors & Key Managerial Personnel
        </h2>
      </header>

      <div className="mb-20">
        <h3 className="text-xl font-bold uppercase tracking-widest border-b-2 border-foreground pb-4 mb-8">
          Directors
        </h3>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {DIRECTORS.map((person, idx) => (
            <PersonCard key={idx} {...person} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold uppercase tracking-widest border-b-2 border-foreground pb-4 mb-8">
          Key Managerial Personnel
        </h3>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {KMP.map((person, idx) => (
            <PersonCard key={idx} {...person} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BOARD COMMITTEES (ACCORDION)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const COMMITTEES = [
  {
    name: "Audit Committee",
    members: [
      {
        name: "Omar Farooq",
        role: "Chairman",
        email: "omar@sheeshexports.com",
        image: "/images/about/male_exec.jpg",
      },
      {
        name: "Imran Khan",
        role: "Member",
        email: "imran@sheeshexports.com",
        image: "/images/about/male_exec.jpg",
      },
      {
        name: "Shabbar Sheikh",
        role: "Member",
        email: "shabbar@sheeshexports.com",
        image: "/images/about/shabbar_sheikh.jpg",
      },
    ],
  },
  {
    name: "Nomination & Remuneration Committee",
    members: [
      {
        name: "Imran Khan",
        role: "Chairman",
        email: "imran@sheeshexports.com",
        image: "/images/about/male_exec.jpg",
      },
      {
        name: "Omar Farooq",
        role: "Member",
        email: "omar@sheeshexports.com",
        image: "/images/about/male_exec.jpg",
      },
      {
        name: "Fatima Sheikh",
        role: "Member",
        email: "fatima@sheeshexports.com",
        image: "/images/about/female_exec.jpg",
      },
    ],
  },
  {
    name: "Stakeholders Relationship Committee",
    members: [
      {
        name: "Fatima Sheikh",
        role: "Member",
        email: "fatima@sheeshexports.com",
        image: "/images/about/female_exec.jpg",
      },
      {
        name: "Shabbar Sheikh",
        role: "Member",
        email: "shabbar@sheeshexports.com",
        image: "/images/about/shabbar_sheikh.jpg",
      },
      {
        name: "Omar Farooq",
        role: "Member",
        email: "omar@sheeshexports.com",
        image: "/images/about/male_exec.jpg",
      },
    ],
  },
  {
    name: "CSR Committee",
    members: [
      {
        name: "Imran Khan",
        role: "Chairman",
        email: "imran@sheeshexports.com",
        image: "/images/about/male_exec.jpg",
      },
      {
        name: "Tariq Mahmood",
        role: "Member",
        email: "tariq@sheeshexports.com",
        image: "/images/about/male_exec.jpg",
      },
      {
        name: "Zainab Ali",
        role: "Member",
        email: "zainab@sheeshexports.com",
        image: "/images/about/female_exec.jpg",
      },
    ],
  },
];

const CommitteesSection = () => (
  <section className="py-24 bg-muted/30 border-b border-border">
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
      <header className="mb-16">
        <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase text-center md:text-left">
          Board Committees
        </h2>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        {COMMITTEES.map((com, idx) => (
          <div key={idx} className="bg-background border border-border p-8 lg:p-10">
            <h3 className="font-heading text-2xl font-bold mb-8 uppercase border-b border-border pb-4">
              {com.name}
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {com.members.map((member, mIdx) => (
                <PersonCard key={mIdx} {...member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FINANCIALS & NOTICES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const FINANCIAL_STATEMENTS = [
  "Auditors Report FY 2024-25",
  "Auditors Report FY 2023-24",
  "Auditors Report FY 2022-23",
  "Auditors Report FY 2021-22",
];

const FinancialStatementsSection = () => (
  <section id="financial-statements" className="py-24 bg-background border-b border-border">
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
            Section 05
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase mb-12">
            Financial Statements
          </h2>
          <div className="flex flex-col gap-4">
            {FINANCIAL_STATEMENTS.map((title, idx) => (
              <a
                key={idx}
                href={`/pdfs/${title.replace(/ /g, "-")}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 border border-border bg-muted/20 hover:border-primary transition-colors"
              >
                <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <span className="flex items-center text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                  Open PDF <ArrowUpRight className="w-4 h-4 ml-2" />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
              Section 06
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase mb-12">
              Restated Financials
            </h2>
            <div className="p-10 border border-border bg-foreground text-background">
              <h3 className="font-heading text-3xl font-bold mb-6">Restated Financial Statement</h3>
              <p className="text-background/70 mb-10 font-light">
                Comprehensive restated financial information as required for IPO disclosures.
              </p>
              <a
                href="/pdfs/Restated-Financials.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                View Statement <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="mt-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
              Section 07
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase mb-8">Notices</h2>
            <a
              href="/pdfs/AGM-Notice.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border border-border bg-muted/20 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                  AGM Notice
                </h3>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors flex items-center">
                Open PDF <ArrowUpRight className="w-4 h-4 ml-2" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SEARCHABLE POLICIES EXPLORER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const POLICIES = [
  "CSR Policy",
  "Archival Policy",
  "Code for Independent Directors",
  "Code for Directors & Senior Management",
  "Familiarization Programmes Policy",
  "Nomination & Remuneration Policy",
  "Code of Conduct for Insider Trading",
  "Related Party Transaction Policy",
  "Whistle Blower Policy",
  "Risk Management Policy",
  "Materiality Policy",
  "Dividend Policy",
];

const PoliciesSection = () => {
  const [search, setSearch] = useState("");
  const filtered = POLICIES.filter((p) => p.toLowerCase().includes(search.toLowerCase()));

  return (
    <section id="policies" className="py-24 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <header className="mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
            Section 08
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase">Policies</h2>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search policies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-background border border-border rounded-none pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </header>

        <div className="bg-background border border-border">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-muted/50 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <div className="col-span-8 md:col-span-9">Policy Name</div>
            <div className="col-span-4 md:col-span-3 text-right">Action</div>
          </div>
          <div className="flex flex-col max-h-[600px] overflow-y-auto">
            {filtered.map((policy, idx) => (
              <a
                key={idx}
                href={`/pdfs/policies/${policy.replace(/ /g, "-")}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 gap-4 p-4 border-b border-border last:border-0 hover:bg-muted/30 transition-colors items-center"
              >
                <div className="col-span-8 md:col-span-9">
                  <h3 className="font-bold text-sm md:text-base group-hover:text-primary transition-colors">
                    {policy}
                  </h3>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1 block">
                    Corporate Governance
                  </span>
                </div>
                <div className="col-span-4 md:col-span-3 text-right">
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                    <span className="hidden sm:inline">View PDF</span>{" "}
                    <ArrowUpRight className="w-4 h-4 ml-1 sm:ml-2" />
                  </span>
                </div>
              </a>
            ))}
            {filtered.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">
                No policies found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MATERIAL DOCUMENTS & CONTRACTS (LIBRARY)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MATERIAL_DOCS = [
  "MOA",
  "AOA",
  "COI Pvt Ltd",
  "COI Public Ltd",
  "Resolution of BOD",
  "Resolution of Shareholders",
  "DRHP Resolution",
  "RHP Resolution",
  "Examination Report",
  "Annual Reports",
  "Consents",
  "Restated Financial Information",
  "Statement of Tax Benefit",
  "Consent from Statutory Auditor",
  "DD Certificate",
  "In-Principle Approval",
  "Site Visit Report",
  "Capacity Utilization Certificate",
  "Valuation Report",
  "Non Compete Agreement",
  "Share Valuation Report",
  "Certificate on Outstanding Dues to Creditors",
];

const MATERIAL_CONTRACTS = [
  "Issue Agreement",
  "Registrar Agreement",
  "Escrow Agreement",
  "Tripartite Agreement – CDSL",
  "Tripartite Agreement – NSDL",
  "Market Making Agreement",
  "Underwriting Agreement",
  "Syndicate Agreement",
  "Sub Syndicate Agreement",
  "Monitoring Agency Agreement",
];

const DocumentLibraryList = ({
  items,
  title,
  sectionId,
  id,
}: {
  items: string[];
  title: string;
  sectionId: string;
  id: string;
}) => (
  <section id={id} className="py-24 bg-background border-b border-border">
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
      <header className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
          Section {sectionId}
        </span>
        <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase">{title}</h2>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
        {items.map((doc, idx) => (
          <a
            key={idx}
            href={`/pdfs/material/${doc.replace(/ /g, "-")}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors"
          >
            <div>
              <h3 className="font-bold text-sm group-hover:text-primary transition-colors">
                {doc}
              </h3>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider block mt-1">
                Legal Document
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INVESTOR CONTACT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ContactSection = () => (
  <section id="contact" className="py-24 bg-muted/30">
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
      <header className="mb-16 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
          Section 11
        </span>
        <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase">Investor Contact</h2>
      </header>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* CS */}
        <div className="p-8 lg:p-12 border border-border bg-background">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-8 border-b border-border pb-4">
            Company Secretary & Compliance Officer
          </h3>
          <h4 className="font-heading text-2xl font-bold mb-6">Ms. Ayesha Rahman</h4>

          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                507, B-Block, The One Building,
                <br />
                5 RNT Marg, Indore,
                <br />
                Madhya Pradesh - 452001
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <p className="font-mono">+91 9826270888</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a
                href="mailto:info@sheeshexports.in"
                className="hover:text-primary font-bold transition-colors"
              >
                info@sheeshexports.in
              </a>
            </div>
          </div>
        </div>

        {/* RTA */}
        <div className="p-8 lg:p-12 border border-border bg-background">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-8 border-b border-border pb-4">
            Registrar & Transfer Agent
          </h3>
          <h4 className="font-heading text-2xl font-bold mb-2">
            Purva Sharegistry (India) Pvt. Ltd
          </h4>
          <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-6">
            SEBI Reg: INR000001112
          </p>

          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Unit No. 9 Shiv Shakti Industrial Estate,
                <br />
                J. R. Boricha Marg, Lower Parel (E),
                <br />
                Mumbai 400011
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <p className="font-mono">+91 22 4961 4132</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a
                href="mailto:newissue@purvashare.com"
                className="hover:text-primary font-bold transition-colors"
              >
                newissue@purvashare.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="w-5 h-5 text-primary shrink-0" />
              <a
                href="https://www.purvashare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary font-bold transition-colors"
              >
                www.purvashare.com
              </a>
            </div>
            <div className="pt-6 border-t border-border mt-6">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest block mb-4">
                Contact Person
              </span>
              <PersonCard
                name="Ms. Sana Yusuf"
                role="Operations & Support"
                email="newissue@purvashare.com"
                image="/images/about/female_exec.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MAIN PAGE EXPORT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default function InvestorRelationsPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <HeroSection />
      {/* <DirectorySection /> */}
      <OfferDocumentsSection />
      <AnnualFilingsSection />
      <GovernanceSection />
      <CommitteesSection />
      <FinancialStatementsSection />
      <PoliciesSection />
      <DocumentLibraryList
        items={MATERIAL_DOCS}
        title="Material Documents"
        sectionId="09"
        id="material-documents"
      />
      <DocumentLibraryList
        items={MATERIAL_CONTRACTS}
        title="Material Contracts"
        sectionId="10"
        id="material-contracts"
      />
      <ContactSection />
    </main>
  );
}
