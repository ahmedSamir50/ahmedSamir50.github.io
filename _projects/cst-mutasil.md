---
layout: project
title: "CST (Mutasil) Portal"
slug: "cst-mutasil"
categories: ["gov-enterprise", "digital-transformation"]
company_logo: "assets/images/companies/ELm_logo.svg"
tech: [".NET Core", "EF Core", "Multi-tier Architecture", "Secure APIs"]
icon: "radio"
gradient_from: "blue-500"
gradient_to: "violet-500"
description: "Full-stack implementation for the Saudi Communication, Space & Technology Commission managing tech licenses and governance approvals."
order: 2
---

<div class="space-y-6">
  <div class="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
    <h3 class="text-xl font-bold text-blue-400 mb-4">Project Overview</h3>
    <div class="space-y-4">
      <p><strong class="text-blue-400">Situation:</strong> The Saudi Communication, Space & Technology Commission (CST) needed a robust, highly available platform to securely govern national tech licenses and communications approvals.</p>
      <p><strong class="text-blue-400">Task:</strong> Deliver a full-stack portal handling sensitive user data and highly complex multi-stage regulatory workflows.</p>
      <p><strong class="text-blue-400">Action:</strong> Implemented a secure, high-availability multi-tier architecture using .NET Core and EF Core. Engineered robust APIs capable of efficiently orchestrating long-running, multi-actor approval workflows for high-profile governmental and commercial entities.</p>
      <p><strong class="text-blue-400">Result:</strong> Deployed a secure, centralized governance platform that streamlines the application and approval lifecycle for thousands of national tech licenses.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Key Challenges</h4>
      <ul class="space-y-2 text-sm text-slate-400">
        <li class="flex gap-2"><span>▹</span> High availability requirements</li>
        <li class="flex gap-2"><span>▹</span> Handling complex, multi-actor state machines</li>
        <li class="flex gap-2"><span>▹</span> Secure multi-tier architectural boundaries</li>
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
