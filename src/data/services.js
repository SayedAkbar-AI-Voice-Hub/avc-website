export const PHONE = '+1(510)634-7901'
export const PHONE_DISPLAY = '+1 (510) 634-7901'
export const PHONE_HREF = 'tel:+15106347901'

// Single main voice agent number (PHONE_HREF / PHONE_DISPLAY above).
// Callers are transferred to the per-niche sub-agent after selecting an industry.
export const services = [
  {
    slug: 'real-estate',
    name: 'Real Estate',
    tagline: 'Never miss a weekend lead again',
    heroHeadline: 'Stop Losing Weekend Leads to Your Competition',
    heroSubtext: 'Real estate moves fast. Your AI receptionist is available every evening, every weekend — qualifying buyers and scheduling showings the moment they call.',
    painPoints: [
      {
        icon: 'PhoneOff',
        title: 'Weekend & Evening Leads Go Cold',
        description: '75% of real estate inquiries happen outside business hours. Every missed call is a potential commission walking straight to a competitor who picked up.',
      },
      {
        icon: 'Filter',
        title: 'Drowning in Unqualified Inquiries',
        description: 'You spend hours on calls with tire-kickers. Our AI pre-qualifies every caller by budget, timeline, and pre-approval status before it ever reaches you.',
      },
      {
        icon: 'CalendarX',
        title: 'No-Show Showings Waste Your Day',
        description: 'Scheduling a showing and getting ghosted costs you hours. AI follow-up sequences confirm appointments and reduce no-shows by up to 60%.',
      },
    ],
    solutions: [
      {
        title: 'Every Inquiry Captured Instantly',
        description: 'AI answers within 1 second, gathers property interest, budget range, pre-approval status, preferred neighborhoods, and urgency — even at 2am on a Sunday.',
      },
      {
        title: 'Automatic Lead Scoring',
        description: 'Calls are transcribed and summarized. Hot leads trigger an immediate SMS alert to you. Cold leads enter a nurture sequence automatically.',
      },
      {
        title: 'Showing Confirmation Sequences',
        description: 'Automated reminders sent 24h and 2h before every showing, with easy reschedule options to keep your calendar full of committed buyers.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Buyer calls your number — AI answers instantly with your agency\'s name' },
      { step: 2, text: 'AI qualifies: budget, location, timeline, pre-approval status' },
      { step: 3, text: 'Showing scheduled in real-time or lead info captured' },
      { step: 4, text: 'Transcript + lead summary sent to you immediately' },
      { step: 5, text: 'Automated follow-up sequence begins' },
    ],
  },
  {
    slug: 'dental',
    name: 'Dental Clinics',
    tagline: 'Fill your schedule, reduce no-shows',
    heroHeadline: 'Your Front Desk Can\'t Answer Every Call. Your AI Can.',
    heroSubtext: 'New patient acquisition happens at the moment someone picks up the phone. Don\'t let after-hours calls, hold times, or overwhelmed staff cost you $10,000+ patients.',
    painPoints: [
      {
        icon: 'PhoneOff',
        title: 'Front Desk Is Overwhelmed at Peak Hours',
        description: 'Monday mornings and post-weekend rushes flood your phones. Patients on hold hang up — and call the practice down the street. Every unanswered call is a lost patient relationship.',
      },
      {
        icon: 'Moon',
        title: 'After-Hours New Patient Calls Vanish',
        description: 'A prospective patient with a toothache at 9pm wants to book now. They won\'t call back in the morning. Your AI captures their info and books them while they\'re still motivated.',
      },
      {
        icon: 'CalendarX',
        title: 'No-Show Rate Erodes Your Schedule',
        description: 'The average dental practice loses 15–20% of scheduled appointments to no-shows. Automated SMS and voice reminders cut that rate in half.',
      },
    ],
    solutions: [
      {
        title: 'Never Miss a New Patient Call',
        description: 'AI handles overflow and after-hours calls, collects insurance information, chief complaint, and preferred appointment times with natural conversation.',
      },
      {
        title: 'Instant Booking for New and Existing Patients',
        description: 'Integrates with your scheduling system to book directly into open slots. Patients hear available times in real-time.',
      },
      {
        title: 'Reminder Sequences That Actually Work',
        description: 'Multi-touch SMS + email reminders with two-tap confirmation. No-show rate drops measurably within 30 days of activation.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Patient calls after hours or during overflow' },
      { step: 2, text: 'AI greets them as your practice' },
      { step: 3, text: 'New patient: collects name, DOB, insurance, chief complaint, preferred time' },
      { step: 4, text: 'Appointment confirmed in your scheduling system' },
      { step: 5, text: 'Reminder sequence triggered automatically' },
    ],
  },
  {
    slug: 'auto-dealerships',
    name: 'Auto Dealerships',
    tagline: 'Capture leads while showroom is closed',
    heroHeadline: 'Car Shoppers Browse at Night. Your AI Never Clocks Out.',
    heroSubtext: 'The modern car buyer researches online until 10pm and calls when the impulse strikes. Your AI captures that lead, answers inventory questions, and schedules the test drive.',
    painPoints: [
      {
        icon: 'Moon',
        title: 'After-Hours Shoppers Hit Voicemail',
        description: '48% of automotive leads are generated outside business hours. These high-intent buyers are comparison shopping. The first dealer to respond wins the deal.',
      },
      {
        icon: 'PhoneOff',
        title: 'Floor Staff Misses Phone Leads',
        description: 'When the floor is busy, calls roll to voicemail. A customer waiting 4 hours for a callback has already visited two other lots. Every missed call has a dollar value attached.',
      },
      {
        icon: 'TrendingDown',
        title: 'Inconsistent Test Drive Follow-Up',
        description: 'A customer who test drove last Saturday is your hottest lead. Inconsistent follow-up lets them cool off. AI sequences keep the conversation warm and move them to close.',
      },
    ],
    solutions: [
      {
        title: '24/7 Lead Capture for Every Inquiry',
        description: 'AI answers inventory questions, collects trade-in interest, finance pre-qualification, and desired features. Hot summary delivered to your sales team immediately.',
      },
      {
        title: 'Instant Test Drive Scheduling',
        description: 'AI books test drives directly into your calendar. Confirmation and vehicle preparation instructions sent automatically.',
      },
      {
        title: 'Automated Follow-Up Sequences',
        description: 'Post-visit follow-up at 24h, 72h, and 7 days with personalized messages based on the vehicle they expressed interest in.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Shopper calls about a vehicle' },
      { step: 2, text: 'AI identifies interest: new/used, model, price range' },
      { step: 3, text: 'Captures name, contact, trade-in info, financing interest' },
      { step: 4, text: 'Books test drive or schedules callback with specific salesperson' },
      { step: 5, text: 'Full lead profile + transcript delivered to CRM' },
    ],
  },
  {
    slug: 'hvac',
    name: 'HVAC',
    tagline: 'Answer every emergency, fill every slot',
    heroHeadline: 'Emergency HVAC Calls at 2am Shouldn\'t Go to Voicemail',
    heroSubtext: 'When a homeowner\'s furnace dies in January or AC fails in July, they call every HVAC company until someone answers. Your AI answers first — every time.',
    painPoints: [
      {
        icon: 'PhoneOff',
        title: 'Emergency Calls After Hours Go Unanswered',
        description: '2am furnace failures, weekend AC outages — these are your highest-value emergency service calls. When you don\'t answer, the homeowner calls your competitor. That\'s a $500–2000 job gone.',
      },
      {
        icon: 'Zap',
        title: 'Seasonal Rush Creates Call Overflow',
        description: 'First heat wave of summer. Your phones ring off the hook, techs are booked, and your dispatcher can\'t handle the volume. Qualified leads slip through.',
      },
      {
        icon: 'FileX',
        title: 'Quotes Sent But Never Followed Up',
        description: 'You spent 45 minutes on-site and sent a detailed quote. You hear nothing. AI automatically follows up at 48h, 5 days, and 2 weeks — recovering jobs that would have been forgotten.',
      },
    ],
    solutions: [
      {
        title: '24/7 Emergency Dispatch Ready',
        description: 'AI captures emergency details, triages urgency (no heat vs. reduced cooling), and routes to your on-call tech with full homeowner info — immediately.',
      },
      {
        title: 'Seasonal Overflow Handling',
        description: 'During peak periods, AI handles first contact for all calls, qualifies by urgency and equipment type, and books into your scheduling system automatically.',
      },
      {
        title: 'Quote Follow-Up That Doesn\'t Forget',
        description: 'Automated sequences follow up on every estimate sent, handle common objections with pre-approved responses, and escalate hot leads directly to you.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Homeowner calls with emergency or service request' },
      { step: 2, text: 'AI triages: emergency dispatch vs. scheduled service' },
      { step: 3, text: 'Emergency: address, system type, issue details — on-call tech notified' },
      { step: 4, text: 'Standard: appointment booked in available slot' },
      { step: 5, text: 'Follow-up sequence initiated for estimates' },
    ],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    tagline: 'First to answer wins the emergency job',
    heroHeadline: 'A Burst Pipe at 3am Is Your Most Profitable Call — If You Answer It',
    heroSubtext: 'Plumbing emergencies don\'t wait for business hours. Your AI handles the call, captures the details, and dispatches your on-call plumber before your competitor even wakes up.',
    painPoints: [
      {
        icon: 'PhoneOff',
        title: '3am Emergency Calls Go to Voicemail',
        description: 'A homeowner with a burst pipe calls every plumber in the area. First to answer gets the premium emergency job. Voicemail gets nothing — and they\'re already calling the next number.',
      },
      {
        icon: 'Wrench',
        title: 'Estimating Calls Pull Plumbers Off Active Jobs',
        description: 'Your best tech stops mid-job to answer a price inquiry. That estimate call takes 20 minutes and may not even convert. AI handles all initial estimate calls so your team stays focused.',
      },
      {
        icon: 'FileX',
        title: 'Quote Follow-Up Falls Through the Cracks',
        description: 'You gave 8 estimates last week. You followed up on 2. The other 6 went cold — but several of those homeowners still need the work done and would have chosen you with one more touchpoint.',
      },
    ],
    solutions: [
      {
        title: 'Emergency Triage and Dispatch',
        description: 'AI identifies emergency severity, captures address and issue details, and contacts your on-call plumber with everything needed to respond immediately.',
      },
      {
        title: 'Estimate Intake Without Interruption',
        description: 'All initial service inquiries and estimate requests handled by AI. You receive a complete job summary ready for scheduling — no calls interrupted.',
      },
      {
        title: 'Automated Quote Recovery',
        description: 'Every estimate automatically enters a follow-up sequence. Homeowners who didn\'t respond at 48h receive a friendly check-in. Conversion rates increase measurably.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Homeowner calls with emergency or estimate request' },
      { step: 2, text: 'AI triages: immediate emergency vs. scheduled service' },
      { step: 3, text: 'Emergency: address, issue type, water shutoff status captured — on-call notified' },
      { step: 4, text: 'Estimate: property details, issue description, timeline collected' },
      { step: 5, text: 'Booking confirmed or estimate follow-up sequence activated' },
    ],
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    tagline: 'Fill your estimate calendar on autopilot',
    heroHeadline: 'Stop Losing Landscaping Leads to a Missed Call',
    heroSubtext: 'Property owners decide who to call in the spring. Your AI answers every inquiry, qualifies budget and scope, and books your estimate appointments — even during your busiest weeks.',
    painPoints: [
      {
        icon: 'PhoneOff',
        title: 'Quote Requests Pile Up With No Response',
        description: 'You\'re in the field 10 hours a day during peak season. Quote requests go to voicemail, get missed, or sit in a queue until the homeowner already hired someone else.',
      },
      {
        icon: 'Zap',
        title: 'Seasonal Spikes Overwhelm Your Capacity',
        description: 'March through May, your phone never stops. You physically cannot respond to every inquiry while running a crew. The calls you miss are the revenue you don\'t capture.',
      },
      {
        icon: 'FileX',
        title: 'Inconsistent Follow-Up on Estimates',
        description: 'You quoted 15 properties this month. You called back 6. The other 9 are sitting on a notepad. Automated sequences contact every estimate automatically.',
      },
    ],
    solutions: [
      {
        title: 'Every Inquiry Answered, Every Lead Captured',
        description: 'AI handles all inbound calls, collects property address, service type, square footage, and budget range — every time, without fail.',
      },
      {
        title: 'Estimate Scheduling Automated',
        description: 'AI books estimate appointments directly into your calendar. Prep info sent to you before arrival so you show up ready to close.',
      },
      {
        title: 'Seasonal Campaign Ready',
        description: 'Pre-program follow-up sequences for spring cleanups, fall leaf removal, or snow contracts. AI activates them on schedule.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Property owner calls about landscaping service' },
      { step: 2, text: 'AI qualifies: service type, property size, timeline, budget' },
      { step: 3, text: 'Estimate appointment booked in your calendar' },
      { step: 4, text: 'Reminder sent to homeowner 24h before appointment' },
      { step: 5, text: 'Post-estimate follow-up sequence begins after your visit' },
    ],
  },
  {
    slug: 'construction',
    name: 'Construction Companies',
    tagline: 'Never lose a bid to a slow response',
    heroHeadline: 'You\'re Running a Job Site. Your AI Is Running Your Phones.',
    heroSubtext: 'New project inquiries don\'t wait while you\'re on-site. Your AI captures every lead, qualifies project scope, and schedules consultations — so you never lose a bid to a slow response.',
    painPoints: [
      {
        icon: 'HardHat',
        title: 'Job Site and Office Split Your Attention',
        description: 'You\'re managing crews, subcontractors, and materials — and also trying to answer new project calls. Something always suffers. AI handles the office side so you stay focused on-site.',
      },
      {
        icon: 'Clock',
        title: 'Slow Response Loses New Project Bids',
        description: 'A homeowner planning a $50,000 renovation calls three contractors. The first to respond professionally wins the consultation. Delayed responses communicate disorganization before the project starts.',
      },
      {
        icon: 'Filter',
        title: 'No System for Lead Qualification',
        description: 'Not every inquiry is a fit. AI pre-qualifies by project type, budget range, timeline, and location — so your consultation calendar is filled with serious prospects, not browsers.',
      },
    ],
    solutions: [
      {
        title: 'Always-On Project Inquiry Intake',
        description: 'AI answers every call professionally, collects project scope, location, timeline, and budget range, and delivers a complete lead profile to your team.',
      },
      {
        title: 'Consultation Scheduling That Converts',
        description: 'AI books on-site consultations directly. A pre-visit questionnaire is sent to the homeowner so you arrive informed and ready to close.',
      },
      {
        title: 'Lead Qualification Filter',
        description: 'Projects below your minimum budget or outside your service area are politely declined. You only spend time on projects worth pursuing.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Homeowner calls about a new project' },
      { step: 2, text: 'AI qualifies: project type, scope, budget range, timeline, location' },
      { step: 3, text: 'Consultation appointment scheduled if qualified' },
      { step: 4, text: 'Pre-visit questionnaire sent to homeowner' },
      { step: 5, text: 'Follow-up sequence activated for leads that need more time' },
    ],
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    tagline: 'Emergency coverage around the clock',
    heroHeadline: 'Electrical Emergencies Can\'t Wait. Neither Can Your Leads.',
    heroSubtext: 'From 3am panel failures to commercial wiring quotes, your AI handles every call with the professionalism your license demands — 24 hours a day.',
    painPoints: [
      {
        icon: 'PhoneOff',
        title: 'After-Hours Emergencies Go to Voicemail',
        description: 'A homeowner smells burning wiring at 11pm. They\'re calling every electrician on Google. The one that answers gets an emergency premium job. The others get nothing.',
      },
      {
        icon: 'GitBranch',
        title: 'Residential vs. Commercial Need Different Handling',
        description: 'A $300 residential repair and a $30,000 commercial wiring project require different intake, different questions, and different follow-up. AI qualifies and routes each call appropriately.',
      },
      {
        icon: 'MessageSquare',
        title: 'Inspector and Supplier Callbacks Get Missed',
        description: 'Job coordination involves constant incoming calls from inspectors, suppliers, and GCs. AI captures every message accurately and routes to the right person on your team.',
      },
    ],
    solutions: [
      {
        title: 'Emergency Triage Around the Clock',
        description: 'AI identifies electrical emergencies (burning smell, sparking, power out) and activates your on-call protocol immediately with full homeowner details.',
      },
      {
        title: 'Residential and Commercial Qualification',
        description: 'Separate intake flows for residential service calls vs. commercial projects. You receive pre-qualified leads appropriate to your capacity and specialty.',
      },
      {
        title: 'Team Routing and Message Capture',
        description: 'AI routes inspector calls, supplier calls, and GC coordination to the right team member, capturing messages accurately when they\'re unavailable.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Caller identified as residential, commercial, or coordination' },
      { step: 2, text: 'Emergency: immediate triage and on-call dispatch' },
      { step: 3, text: 'Residential: service type, address, urgency, appointment booking' },
      { step: 4, text: 'Commercial: project type, scope, timeline, consultation scheduling' },
      { step: 5, text: 'Full transcript and lead summary delivered to appropriate team member' },
    ],
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    tagline: 'Handle storm surge without adding staff',
    heroHeadline: 'Storm Damage Calls Surge. Your AI Is Ready for All of Them.',
    heroSubtext: 'After every major storm, homeowners panic-call every roofing contractor they can find. Your AI answers every single call, captures every lead, and books every inspection — while your competitors\' phones ring out.',
    painPoints: [
      {
        icon: 'Zap',
        title: 'Post-Storm Call Surge Overwhelms Your Team',
        description: '40 calls in 24 hours after a hailstorm. You can answer 8. The other 32 go to voicemail or competitors. AI handles every call in the surge without adding staff or costs.',
      },
      {
        icon: 'TrendingDown',
        title: 'Feast-or-Famine Pipeline',
        description: 'Spring hail season and fall pre-winter repairs drive predictable spikes. Without a system to capture and nurture every lead, the feast ends and your pipeline is empty.',
      },
      {
        icon: 'FileX',
        title: 'Inspection Bookings Fall Through the Cracks',
        description: 'Homeowners who call about potential damage often need multiple follow-ups before committing to an inspection. Manual follow-up is inconsistent. AI sequences never forget.',
      },
    ],
    solutions: [
      {
        title: 'Storm Surge Response Ready',
        description: 'AI handles unlimited simultaneous inquiry calls during storm events, capturing every lead for inspection scheduling. Zero calls go unanswered regardless of volume.',
      },
      {
        title: 'Inspection Booking Automation',
        description: 'Free roof inspection bookings made directly into your calendar. Homeowner prep instructions (photos, insurance info) sent automatically to warm up the conversation.',
      },
      {
        title: 'Insurance Claim Support Sequences',
        description: 'AI follow-up sequences guide homeowners through the insurance claim process, keeping your company top-of-mind from inspection through contract signing.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Homeowner calls about storm damage or roofing need' },
      { step: 2, text: 'AI qualifies: damage type, roof age, insurance claim interest, urgency' },
      { step: 3, text: 'Free inspection booked in your calendar' },
      { step: 4, text: 'Insurance claim guidance sequence initiated' },
      { step: 5, text: 'Appointment reminders + post-inspection follow-up automated' },
    ],
  },
  {
    slug: 'cleaning',
    name: 'Cleaning',
    tagline: 'Book more clients, filter price shoppers',
    heroHeadline: 'Turn More Callers into Paying Cleaning Clients',
    heroSubtext: 'Not every caller becomes a client — but your AI qualifies serious buyers from price shoppers, captures recurring service interest, and books first appointments automatically.',
    painPoints: [
      {
        icon: 'Filter',
        title: 'Price Shoppers Waste Your Time',
        description: 'You spend 15 minutes explaining your rates to someone who was never going to book. AI handles all initial inquiries, qualifies intent and budget, and only escalates serious prospects.',
      },
      {
        icon: 'RefreshCw',
        title: 'Recurring vs. One-Time Not Captured',
        description: 'A weekly recurring client is worth 10x a one-time deep clean. AI identifies recurring service intent early in the conversation and applies the appropriate nurture sequence.',
      },
      {
        icon: 'PhoneOff',
        title: 'Missed Calls During Active Cleaning Jobs',
        description: 'You\'re cleaning — your phone rings, you miss it, the prospect calls someone else. AI answers every call while you\'re working, capturing bookings in real-time.',
      },
    ],
    solutions: [
      {
        title: 'Instant Inquiry Qualification',
        description: 'AI collects home size, service type (regular/deep/move-in/move-out), frequency preference, and budget range in the first 2 minutes of every call.',
      },
      {
        title: 'Recurring Client Conversion',
        description: 'Prospects expressing interest in recurring service are automatically enrolled in a nurture sequence that highlights your reliability and scheduling flexibility.',
      },
      {
        title: 'Never Miss a Booking Opportunity',
        description: 'Every call answered while you\'re on-site. Booking calendar updated in real-time. You review your booked jobs at end of day — nothing slips through.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Prospect calls about cleaning service' },
      { step: 2, text: 'AI qualifies: home size, service type, frequency, location, budget' },
      { step: 3, text: 'One-time: appointment booked, prep instructions sent' },
      { step: 4, text: 'Recurring: pricing presented, first appointment scheduled, cadence confirmed' },
      { step: 5, text: 'Review request sequence initiated after first completed service' },
    ],
  },
  {
    slug: 'medical',
    name: 'Medical Practices',
    tagline: 'Keep your front desk focused on patients, not phones',
    heroHeadline: 'Your Front Desk Is Overwhelmed. Your Patients Can\'t Wait.',
    heroSubtext: 'Missed calls at a medical practice aren\'t just lost revenue — they\'re patients who couldn\'t get help. Your AI answers every call, handles appointment booking, and routes urgent situations instantly.',
    painPoints: [
      {
        icon: 'PhoneOff',
        title: 'Hold Times Drive Patients to Other Practices',
        description: 'Patients calling to book an appointment shouldn\'t be put on hold for 10 minutes. They hang up, call a competitor, and may never come back. Every unanswered call erodes your patient base.',
      },
      {
        icon: 'Moon',
        title: 'After-Hours Calls Get No Response',
        description: 'A patient with a new symptom or urgent question calls after 5pm and hits voicemail. They either go to urgent care (losing you the visit revenue) or feel abandoned by your practice.',
      },
      {
        icon: 'CalendarX',
        title: 'No-Show Appointments Cripple Your Schedule',
        description: 'The average medical practice loses 18% of scheduled visits to no-shows. Each empty slot costs $150–$400 in lost revenue. Automated multi-touch reminders cut this rate significantly.',
      },
    ],
    solutions: [
      {
        title: 'Appointment Booking Without the Wait',
        description: 'AI handles all inbound scheduling calls, checks availability in real-time, and books patients directly into your EHR-connected calendar — with zero hold time.',
      },
      {
        title: 'After-Hours Nurse Triage Routing',
        description: 'After-hours callers are triaged by urgency: emergencies routed to 911 or on-call staff, urgent concerns captured with callback, routine requests scheduled for next available slot.',
      },
      {
        title: 'Automated Appointment Reminders',
        description: 'Multi-touch SMS + voice reminders at 48h and 24h before every appointment. Patients confirm with one tap, reschedule seamlessly, or free the slot for waitlist patients.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Patient calls the practice — AI answers immediately with your practice name' },
      { step: 2, text: 'AI identifies call type: new appointment, refill request, urgent concern, or general inquiry' },
      { step: 3, text: 'Urgent: triage script applied, on-call staff notified if needed' },
      { step: 4, text: 'Appointment: insurance, reason for visit, and preferred time collected — slot booked' },
      { step: 5, text: 'Reminder sequence triggered — no-shows reduced automatically' },
    ],
  },
  {
    slug: 'transportation',
    name: 'Transportation & Logistics',
    tagline: 'Dispatch faster, miss fewer loads',
    heroHeadline: 'Every Load Missed Is Money Left on the Road',
    heroSubtext: 'Shippers call when they have freight. Drivers call when they need direction. Your AI handles all of it — qualifying loads, dispatching drivers, and capturing every opportunity before your competitor does.',
    painPoints: [
      {
        icon: 'PhoneOff',
        title: 'Dispatch Calls Missed During Peak Hours',
        description: 'A shipper has a hot load and is calling three carriers. First to confirm gets the load. When your dispatcher is on another call or unavailable, that freight — and that revenue — goes to someone else.',
      },
      {
        icon: 'Truck',
        title: 'Drivers Calling In Slows Dispatch Down',
        description: 'Routine driver check-ins, ETA updates, and delay notifications tie up your dispatchers. AI handles these structured calls, freeing your team for complex coordination that requires human judgment.',
      },
      {
        icon: 'FileX',
        title: 'Broker and Shipper Leads Fall Through the Cracks',
        description: 'A new broker called about lane capacity. Nobody followed up. That relationship — worth tens of thousands in recurring freight — was lost because the callback slipped through.',
      },
    ],
    solutions: [
      {
        title: 'Load Intake and Qualification 24/7',
        description: 'AI captures load details from shippers and brokers: origin, destination, weight, commodity, pick-up window, and rate. Hot leads flagged to dispatch immediately.',
      },
      {
        title: 'Driver Check-In Automation',
        description: 'Drivers call a dedicated line for ETA updates, delay reports, and delivery confirmations. AI logs everything and alerts dispatch only when intervention is needed.',
      },
      {
        title: 'Broker Relationship Follow-Up',
        description: 'Every new broker or shipper inquiry enters a follow-up sequence. Your team builds relationships without losing leads to a forgotten callback.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Shipper, broker, or driver calls in' },
      { step: 2, text: 'AI identifies caller type and routes appropriately' },
      { step: 3, text: 'Shipper/broker: load details captured, rate and availability discussed' },
      { step: 4, text: 'Driver: ETA, delay, or delivery info logged — dispatch alerted if urgent' },
      { step: 5, text: 'Full call log + load summary delivered to your team instantly' },
    ],
  },
  {
    slug: 'insurance',
    name: 'Insurance Agencies',
    tagline: 'Quote more clients, retain more policies',
    heroHeadline: 'Insurance Shoppers Won\'t Wait for a Callback. Your AI Won\'t Make Them.',
    heroSubtext: 'Someone shopping for insurance is making a decision within hours. Your AI answers immediately, qualifies their coverage needs, and connects serious prospects to your agents before they buy from someone else.',
    painPoints: [
      {
        icon: 'PhoneOff',
        title: 'Quote Requests Go Unanswered After Hours',
        description: 'A homeowner shops for insurance after their closing meeting at 7pm. They call three agencies. Two go to voicemail. The one that answers — or has an AI that does — closes the policy. That\'s $1,200+ ARR per missed call.',
      },
      {
        icon: 'Filter',
        title: 'Agents Waste Time on Unqualified Shoppers',
        description: 'Not every caller will convert. Price-only shoppers, ineligible risks, and out-of-state prospects drain agent time. AI pre-qualifies every call so agents only speak with ready-to-bind prospects.',
      },
      {
        icon: 'RefreshCw',
        title: 'Renewal Follow-Up Is Inconsistent',
        description: 'A client whose policy renews in 60 days is vulnerable to being poached by a competitor. Without a systematic renewal outreach sequence, you lose clients you already earned.',
      },
    ],
    solutions: [
      {
        title: 'Instant Quote Request Intake',
        description: 'AI collects coverage type, property or vehicle details, current carrier, and price sensitivity — then routes qualified prospects to the right agent with a complete lead brief.',
      },
      {
        title: 'Agent Calendar Optimization',
        description: 'Hot prospects are scheduled directly into agent calendars for a quote consultation. Cold leads enter a nurture sequence. Agents spend 100% of their time on people ready to buy.',
      },
      {
        title: 'Renewal Retention Sequences',
        description: 'Automated outreach 90, 60, and 30 days before renewal date. Clients are reminded of their coverage, offered a policy review, and connected to their agent — reducing lapse and churn.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Prospect or existing client calls the agency' },
      { step: 2, text: 'AI identifies: new quote request, existing policy question, or claim inquiry' },
      { step: 3, text: 'New quote: coverage type, key details, and urgency qualified' },
      { step: 4, text: 'Qualified prospect scheduled with an agent — full profile delivered' },
      { step: 5, text: 'Follow-up and renewal sequences activated based on call outcome' },
    ],
  },
  {
    slug: 'driving-schools',
    name: 'Driving Schools',
    tagline: 'Book more students, miss zero calls',
    heroHeadline: 'Your Instructors Are Behind the Wheel — Your AI Is on the Phone',
    heroSubtext: 'Parents and new drivers call during the day, after school, and on weekends to book lessons. While your instructors are teaching, your AI answers every call, books lessons into your schedule, and stops you losing students to the school across town.',
    painPoints: [
      {
        icon: 'Car',
        title: 'Instructors Can\'t Answer the Phone While Teaching',
        description: 'You\'re in the passenger seat coaching a nervous teen through a three-point turn — you can\'t pick up. That parent calling to book a package? They\'re already dialing the next school on Google. Every missed call is a $400–$800 student walking away.',
      },
      {
        icon: 'Moon',
        title: 'Parents Call After Work — When You\'re Closed',
        description: 'The decision to enroll a teen happens at the dinner table at 7pm. By 9am the next morning, half of them have moved on. AI answers in the evenings, on weekends, and over school holidays — when your competitors\' phones go to voicemail.',
      },
      {
        icon: 'CalendarX',
        title: 'No-Shows and Last-Minute Cancellations Burn Hours',
        description: 'A no-show on a 2-hour lesson costs you the slot, the instructor\'s time, and the gas. Manual reminder calls eat your admin time. Automated SMS + voice reminders cut no-shows dramatically and keep your calendar earning.',
      },
      {
        icon: 'DollarSign',
        title: 'Hiring a Receptionist Costs More Than It Earns',
        description: 'A part-time front desk costs $2,500–$4,000/month before they\'ve booked a single lesson. AI handles every call, every booking, and every reminder for a fraction of that — and never takes a sick day.',
      },
      {
        icon: 'Filter',
        title: 'Price Shoppers Drain Your Day',
        description: '"How much for a package?" calls take 10 minutes each and rarely convert. AI quotes packages instantly, qualifies serious students, and only escalates the ones ready to book.',
      },
      {
        icon: 'FileX',
        title: 'Road Test Prep & Renewal Reminders Slip Through',
        description: 'A student who finished beginner lessons last month is your easiest road-test-prep upsell — if you remember to call. AI runs automated follow-up sequences so you upsell every student at the right moment.',
      },
    ],
    solutions: [
      {
        title: 'Every Call Answered While You\'re on the Road',
        description: 'AI answers as your driving school 24/7, collects student name, age, license stage (learner/permit/road test prep), preferred lesson times, and package interest — then drops a complete lead summary into your inbox.',
      },
      {
        title: 'Real-Time Lesson Booking',
        description: 'AI checks your live calendar and books lessons directly into open instructor slots — including pickup address, lesson type (in-car, highway, road test prep), and duration. The student gets confirmation via SMS instantly.',
      },
      {
        title: 'No-Show Killer Reminder Sequences',
        description: 'Automatic SMS + voice reminders 48h, 24h, and 2h before every lesson with one-tap confirm or reschedule. Cancelled slots are released to your waitlist automatically — your calendar stays full and earning.',
      },
      {
        title: 'Package Pricing & Payment Capture',
        description: 'AI quotes your packages (single lessons, bundles, road test prep) in natural conversation, sends a payment link via SMS, and books the first lesson — turning a 10-minute price call into a paid booking in under 2 minutes.',
      },
      {
        title: 'Save Thousands vs. Hiring a Receptionist',
        description: 'Replace a $3,000/month front desk with an AI that works 24/7, handles unlimited simultaneous calls, never forgets a follow-up, and costs a fraction of one human salary. The math pays for itself in the first month.',
      },
      {
        title: 'Automated Upsell & Re-engagement',
        description: 'Students who finished beginner lessons get an automated nudge for road test prep. Permit holders nearing test date get a road-test-package offer. Lapsed leads get a reactivation message. Revenue you would have left on the table.',
      },
    ],
    callFlow: [
      { step: 1, text: 'Parent or new driver calls about lessons — AI answers as your driving school' },
      { step: 2, text: 'AI qualifies: student age, license stage, location, package interest, schedule preferences' },
      { step: 3, text: 'Package pricing quoted, payment link sent via SMS, first lesson booked into instructor calendar' },
      { step: 4, text: 'SMS confirmation + reminder sequence (48h / 24h / 2h) activated to kill no-shows' },
      { step: 5, text: 'Post-lesson upsell sequence triggers road test prep offer at the right moment' },
    ],
  },
]

export default services
