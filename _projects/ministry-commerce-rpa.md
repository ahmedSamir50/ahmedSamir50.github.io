---
layout: project
title: "KSA Ministry of Commerce (RPA Automation)"
slug: "ministry-commerce-rpa"
categories: ["gov-enterprise", "digital-transformation"]
company_logo: "assets/images/companies/Sure_logo.svg"
beneficiary_logo: "assets/images/companies/Ministry_Of_Commerce_Logo.svg"
tech: ["RPA", "Web Automation", "Automated Auditing", "Data Monitoring"]
icon: "cpu"
gradient_from: "violet-500"
gradient_to: "pink-500"
description: "Developed an RPA solution to automatically audit and rate 32,000+ E-commerce websites, monitoring for price compliance and policy adherence."
order: 5
---

<div class="space-y-6">
  <div class="p-6 rounded-2xl bg-violet-500/5 border border-violet-500/10">
    <h3 class="text-xl font-bold text-violet-400 mb-4">Project Overview</h3>
    <div class="space-y-4">
      <p><strong class="text-violet-400">Situation:</strong> The Ministry of Commerce needed a high-scale solution to monitor the burgeoning KSA e-commerce market for price stability and consumer policy compliance.</p>
      <p><strong class="text-violet-400">Task:</strong> Develop an automated system capable of auditing thousands of distinct e-commerce platforms regularly without human intervention.</p>
      <p><strong class="text-violet-400">Action:</strong> Architected and developed a Robotic Process Automation (RPA) solution. Engineered a robust monitoring engine that systematically scrapes, audits, and rates over 32,000 websites, identifying discrepancies in price compliance and reporting policy violations to the regulatory teams automatically.</p>
      <p><strong class="text-violet-400">Result:</strong> Created a massive-scale oversight tool that allows the Ministry to regulate the national e-commerce ecosystem with 10x more efficiency than manual auditing.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Key Challenges</h4>
      <ul class="space-y-2 text-sm text-slate-400">
        <li class="flex gap-2"><span>▹</span> High-scale automated web auditing</li>
        <li class="flex gap-2"><span>▹</span> Adapting to 32,000+ unique web structures</li>
        <li class="flex gap-2"><span>▹</span> Accurate policy violation reporting</li>
      </ul>
    </div>
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Core Stack</h4>
      <div class="flex flex-wrap gap-2">
        {% for t in page.tech %}
          <span class="tech-tag">{{ t }}</span>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
