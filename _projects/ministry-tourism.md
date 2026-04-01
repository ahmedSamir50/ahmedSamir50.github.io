---
layout: project
title: "KSA Ministry of Tourism"
slug: "ministry-tourism"
categories: ["gov-enterprise", "digital-transformation"]
company_logo: "assets/images/companies/Sure_logo.svg"
beneficiary_logo: "assets/images/companies/Ministry_of_Tourism.svg"
tech: ["Digital Licensing", "Gov Portals", ".NET Core"]
icon: "palmtree"
gradient_from: "blue-500"
gradient_to: "emerald-500"
description: "Delivered 3 critical production modules for facility licensing, serving 3,000+ government employees and investors during KSA's tourism push."
order: 6
---

<div class="space-y-6">
  <div class="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
    <h3 class="text-xl font-bold text-blue-400 mb-4">Project Overview</h3>
    <div class="space-y-4">
      <p><strong class="text-blue-400">Situation:</strong> The Ministry of Tourism required a modern digital infrastructure to facilitate rapid licensing and regulation of tourism facilities across the Kingdom as part of Vision 2030.</p>
      <p><strong class="text-blue-400">Task:</strong> Deliver a suite of production-ready modules to streamline the application, inspection, and issuance lifecycle for facility licenses.</p>
      <p><strong class="text-blue-400">Action:</strong> Architected and delivered 3 major production modules on top of a centralized digital architecture. Engineered complex state machines to handle the intricate approval workflows between government employees and private investors.</p>
      <p><strong class="text-blue-400">Result:</strong> Successfully deployed digital services currently serving over 3,000 internal government employees and thousands of external investors, significantly accelerating the facility licensing process for the Kingdom's tourism sector.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Key Challenges</h4>
      <ul class="space-y-2 text-sm text-slate-400">
        <li class="flex gap-2"><span>▹</span> High-throughput licensing workflows</li>
        <li class="flex gap-2"><span>▹</span> Multi-stage approval state management</li>
        <li class="flex gap-2"><span>▹</span> Scalable infrastructure for sectoral growth</li>
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
