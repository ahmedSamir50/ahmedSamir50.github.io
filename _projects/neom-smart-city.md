---
layout: project
title: "NEOM Smart City Services"
slug: "neom-smart-city"
categories: ["gov-enterprise", "digital-transformation"]
company_logo: "assets/images/companies/Sure_logo.svg"
beneficiary_logo: "assets/images/companies/NEOM_LOGO.svg"
tech: ["GraphQL", "K2 WF", "Azure AD", "Ionic", "Capacitor", "IOS & Android Hybrid", "QR Gates Pass", "Integrations"]
icon: "city"
gradient_from: "amber-500"
gradient_to: "orange-500"
description: "Architected and delivered 7 production services for 13,000+ employees and investors in the NEOM giga-project, integrating complex hardware/software systems."
order: 4
---

<div class="space-y-6">
  <div class="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10">
    <h3 class="text-xl font-bold text-amber-400 mb-4">Project Overview</h3>
    <div class="space-y-4">
      <p><strong class="text-amber-400">Situation:</strong> NEOM required a suite of highly integrated smart city services to manage an expanding workforce and investor population of over 13,000 people across the giga-project.</p>
      <p><strong class="text-amber-400">Task:</strong> Architect and deliver production-ready services capable of bridging the gap between digital software and physical security/safety hardware.</p>
      <p><strong class="text-amber-400">Action:</strong> Delivered 7 core production services using a scalable .NET architecture. Performed deep integrations with external specialized systems, including biometric Face Recognition, physical Access Control Gates, and emergency Computer-Aided Dispatch (CAD SOS) systems.</p>
      <p><strong class="text-amber-400">Result:</strong> Successfully deployed a high-availability infrastructure serving thousands of daily users, establishing baseline smart-city operational capabilities for NEOM's early-phase ecosystems.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 rounded-2xl bg-navy-900 border border-white/5">
      <h4 class="font-bold text-slate-100 mb-3">Key Challenges</h4>
      <ul class="space-y-2 text-sm text-slate-400">
        <li class="flex gap-2"><span>▹</span> Real-time hardware/software handshake</li>
        <li class="flex gap-2"><span>▹</span> High-security biometric processing</li>
        <li class="flex gap-2"><span>▹</span> Mission-critical SOS response sync</li>
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
