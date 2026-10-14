import React from 'react';
import { Volume2, Sparkles, ShieldCheck, PhoneCall, Wrench, Building2, Zap } from 'lucide-react';

export default function AnnouncementMarquee() {
  const announcements = [
    {
      id: 'ann-1',
      icon: Building2,
      text: 'Regional Engineering Headquarters: Mather Square, Opposite Town Railway Station, Ernakulam',
      tag: 'KERALA HQ',
    },
    {
      id: 'ann-2',
      icon: PhoneCall,
      text: '24/7 Rapid Emergency Breakdown Dispatch: Mobile Van Units Active Across Kerala · Call 9447711587',
      tag: '24/7 HOTLINE',
    },
    {
      id: 'ann-3',
      icon: ShieldCheck,
      text: 'Zero Compromise Safety Standards: 100% Compliant with Bureau of Indian Standards & EN-81 Elevator Codes',
      tag: 'CERTIFIED',
    },
    {
      id: 'ann-4',
      icon: Wrench,
      text: 'Comprehensive Annual Maintenance Contracts (AMC) Now Open for Residential & Commercial Complexes',
      tag: 'PREVENTIVE AMC',
    },
    {
      id: 'ann-5',
      icon: Sparkles,
      text: 'Architectural Specialised Solutions: Machine-Room-Less (MRL) & Panoramic Glass Elevators Ready to Commission',
      tag: 'NEW MOBILITY',
    },
    {
      id: 'ann-6',
      icon: Zap,
      text: 'Elevator Modernisation & Retrofitting: Upgrade Aging Control Panels with Energy-Saving V3F Drives',
      tag: 'UPGRADES',
    },
  ];

  return (
    <div className="announcement-marquee-wrapper" aria-label="Sharp Elevator Official Announcements">
      <div className="announcement-badge-affix">
        <span className="marquee-pulse-dot" />
        <Volume2 size={16} className="marquee-bell-icon" />
        <span className="marquee-badge-title">ANNOUNCEMENTS</span>
      </div>

      <div className="marquee-track-container">
        {/* Track duplicated twice for infinite seamless scroll */}
        <div className="marquee-track">
          {announcements.concat(announcements).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`${item.id}-${idx}`} className="marquee-item">
                <span className="marquee-tag">{item.tag}</span>
                <Icon size={14} className="marquee-item-icon" />
                <span className="marquee-text">{item.text}</span>
                <span className="marquee-separator" aria-hidden="true">◆</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
