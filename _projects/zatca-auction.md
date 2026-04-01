---
layout: project
title: "Government Auction Platform (ZATCA)"
slug: "zatca-auction"
categories: ["gov-enterprise", "digital-transformation"]
company_logo: "assets/images/companies/Sure_logo.svg"
beneficiary_logo: "assets/images/companies/ZATCA_LOGO.svg"
tech: ["Angular", "K2 WF", "Integrations", "Real-Time Bidding", "High-Traffic", "SQL Server"]
icon: "gavel"
gradient_from: "cyan-500"
gradient_to: "emerald-500"
description: "Developed a high-traffic internal electronic auction platform for the KSA ZATCA platform, ensuring real-time bidding synchronization and strict data consistency."
order: 6
---

<div class="space-y-6">
  <div class="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
    <h3 class="text-xl font-bold text-cyan-400 mb-4">Project Overview</h3>
    <div class="space-y-4">
      <p><strong class="text-cyan-400">Situation:</strong> The Zakat, Tax and Customs Authority (ZATCA) required an electronic auction platform to handle large-scale internal asset disposal with high integrity and real-time responsiveness.</p>
      <p><strong class="text-cyan-400">Task:</strong> Build a high-throughput bidding engine capable of safely processing concurrent offers while maintaining a perfectly consistent auction state across all clients.</p>
      <p><strong class="text-cyan-400">Action:</strong> Developed a high-traffic bidding engine with optimized concurrency management in SQL Server. Built a real-time notification/sync layer to ensure sub-second updates for all participants, maintaining rigorous data consistency within the overarching KSA ZATCA platform ecosystem.</p>
      <p><strong class="text-cyan-400">Result:</strong> Deployed a secure, transparent auction platform that now manages significant asset cycles with 100% data integrity and high user reliability.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Key Challenges</h4>
      <ul class="space-y-2 text-sm text-slate-400">
        <li class="flex gap-2"><span>▹</span> Real-time bidding synchronization</li>
        <li class="flex gap-2"><span>▹</span> High-concurrency race condition handling</li>
        <li class="flex gap-2"><span>▹</span> Strict fiscal audit compliance</li>
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
