// Every word of public copy lives here. Pages and components read from this
// file, so content can be edited without touching layout code.

export const site = {
  name: 'Abdul Hakeem',
  monogram: 'AH',
  title: 'Data & MIS Analyst | CAFM Planner | Reporting & Automation',
  headline: 'Turning operational data into clear insights and better workflows.',
  role: 'Data & MIS Analyst',
  location: 'Dubai, United Arab Emirates',
  city: 'Dubai',
  timezone: 'Asia/Dubai',
  email: 'abdhakeem20@gmail.com',
  availability: 'Open to relevant opportunities',
  notice: '30 days',
  focus: 'UAE and GCC',
  intro:
    'I turn maintenance and business data into reporting teams can act on: Power BI and Excel dashboards, performance tracking, data checks and practical workflow automation. My experience spans client data operations at NielsenIQ and computer-aided facilities management (CAFM) planning with IBM Maximo in Dubai.',
  socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/abd7akeem' }],
  marquee: ['IBM Maximo', 'Power BI', 'Power Query', 'DAX', 'Advanced Excel', 'MIS reporting', 'KPI & SLA', 'PPM planning', 'Power Automate', 'Data quality'],
}

export interface Project {
  slug: string
  index: string
  title: string
  category: string
  context: string
  period: string
  tint: string
  summary: string
  /** Empty when no tools are verified for the work. */
  tools: string[]
  featured?: boolean
  /** Client work inside an employed role rather than a project of his own. */
  kind?: 'account'
  /** Card and link label; defaults to "Case study". */
  cardCta?: string
  /** Section heading overrides, for entries that are not operational projects. */
  problemTitle?: string
  approachTitle?: string
  overview: string[]
  problem: string[]
  contribution: string[]
  approach: string[]
  delivered: string[]
  proposed?: string[]
  status: string
}

export const projects: Project[] = [
  {
    slug: 'operational-reporting',
    index: '01',
    title: 'Operational Reporting at Dubai Hills Mall',
    category: 'Operational reporting',
    context: 'Ejadah Asset Management Solutions — Dubai Hills Mall, EMAAR',
    period: 'May 2025 – present',
    tint: '#e6e4fb',
    featured: true,
    summary:
      'Bringing IBM Maximo work orders into daily reports covering service levels, planned maintenance, backlog ageing, failures and asset downtime.',
    tools: ['IBM Maximo MAS 8', 'Advanced Excel', 'Power BI', 'Power Query', 'WHERE clause queries'],
    overview: [
      'A live mall maintenance operation produces a continuous stream of service requests and work orders. The reporting has to answer, every morning, what came in, what was closed, what is late, and what is piling up — for an operations team that acts on it and a client that checks it.',
      'This is the reporting core of my computer-aided facilities management (CAFM) work at Dubai Hills Mall, and it continues daily. Reports cover planned preventive maintenance (PPM) and service-level agreement (SLA) performance alongside outstanding work.',
    ],
    problem: [
      'The reporting needed consistent queries, date ranges and work-order definitions across views. Questions about overdue work, workgroups and service-level performance only become comparable when those rules are shared.',
      'Without that, backlog, SLA breaches and PPM slippage surface in a review meeting rather than before it. The reporting exists to move that discovery earlier.',
    ],
    contribution: [
      'Daily operational reports and performance summaries built from live service request and work order records.',
      'Tracking the service request and work order lifecycle: statuses, assignments and closeouts.',
      'Resolution SLA monitoring.',
      'PPM scheduling support and completion monitoring across the maintenance plan.',
      'Backlog volume and ageing tracking by workgroup and work type.',
      'Top 10 failures and critical asset downtime reporting.',
      'Maximo WHERE clause queries to pull the correct record sets instead of filtering by hand.',
      'Excel reporting tools and Power BI reporting views.',
      'Data validation and consistency checks across reporting sources.',
    ],
    approach: [
      'Saved Maximo queries apply consistent selection rules across reporting periods, so trends can be compared even as the underlying work-order records change.',
      'Output is consolidated in Excel for the daily and weekly routine, and in Power BI where the view needs to be explored rather than read.',
    ],
    delivered: [
      'A repeatable daily and weekly reporting routine covering SLA performance, backlog ageing, PPM completion, failures and downtime.',
      'Reporting support for contract performance reviews, key performance indicators, service levels, quality audits and nonconformance tracking.',
      'Excel reporting tools and Power BI views used for operational performance review.',
    ],
    status:
      'Ongoing. This reporting continues under the CAFM Planner role, which began on 1 November 2026.',
  },
  {
    slug: 'prs-performance-reporting',
    index: '02',
    title: 'Operational Performance Reporting in Power BI',
    category: 'Power BI reporting',
    context: 'Ejadah Asset Management Solutions — Dubai Hills Mall assignment',
    period: '2026',
    tint: '#dfe9f2',
    summary:
      'Preparing Maximo exports for Power BI: clean dates, consistent filters and measures for service levels, quality, operational performance and backlog.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Advanced Excel', 'Maximo exports'],
    overview: [
      'Performance reporting needs one set of numbers that survives being questioned. This work moved flat operational exports into a Power BI model where dates, work types and workgroups were handled once, and every view inherited those decisions.',
    ],
    problem: [
      'Maximo exports arrive as flat tables. Date fields are stored in inconsistent formats, work type and workgroup need filtering before two periods are comparable, and a KPI view built on unfiltered data counts work that was never in scope.',
      'When each report defines its own date conversions and filters, two views can count different work orders for the same period. A shared model lets each view use the same scope and KPI definitions.',
    ],
    contribution: [
      'Prepared work order and service request data for reporting.',
      'Cleaned and converted date fields so periods could be compared.',
      'Applied maintenance work type and workgroup filters to define scope.',
      'Developed performance indicator, service-level, quality and backlog views for internal contract performance reviews.',
      'Built reporting tables, matrices and summary cards for review.',
      'Monitored work order creation and completion activity.',
      'Kept reporting calculations consistent across views.',
    ],
    approach: [
      'Power Query handles the repeatable cleaning: type changes, date conversion and scope filters, applied once in the model rather than in each report. DAX measures sit on top for the KPI and SLA figures, so a number has one definition and every view points at it.',
    ],
    delivered: [
      'A Power BI reporting model with performance, service-level, quality and backlog views.',
      'Summary cards and matrices built for performance review.',
    ],
    status:
      'Completed in 2026. Internal contract formulas, penalty rules, targets and operational records are not published here.',
  },
  {
    slug: 'digital-ppm',
    index: '03',
    title: 'Digital PPM Workflow',
    category: 'Workflow digitisation',
    context: 'Ejadah Asset Management Solutions — Dubai Hills Mall assignment',
    period: '2026',
    tint: '#e2ece5',
    summary:
      'A Flask application that captures preventive maintenance checklists digitally and generates a structured PDF record — job plan, technician, timings, responses, remarks, signature and images.',
    tools: ['Python', 'Flask', 'ReportLab', 'SQLite', 'Google Cloud VM'],
    overview: [
      'Technicians recorded preventive maintenance checks on paper. Digital PPM captures their responses against a work-order reference and generates the PDF from the submission.',
    ],
    problem: [
      'With the paper workflow, the team collected and scanned signed checklists after visits. Preparing that evidence added a step before closeout.',
      'A missing sheet or an unreadable scan made it harder to check individual responses during review.',
    ],
    contribution: [
      'Built the application in Python and Flask, deployed on a Google Cloud virtual machine.',
      'Modelled job plans, checklists and submissions in SQLite.',
      'Captured the full submission: work order and job plan information, technician details, work timing, checklist responses, work summary and remarks.',
      'Implemented signature capture and image upload, both carried into the generated document.',
      'Generated the PDF with ReportLab so the record is produced from the submitted data.',
    ],
    approach: [
      'The context sets the constraints. The site runs a high volume of maintenance checklists across more than 130 job plans, so the form had to stay short enough to complete on a phone and the PDF had to look like the document people already sign.',
      'Flask handles submission, SQLite stores the records and ReportLab creates the PDF. Working through the full flow helped refine the mobile checklist and document output.',
    ],
    delivered: [
      'A deployed web application that captures preventive maintenance checklists digitally.',
      'Generated PDF records containing the job plan, technician, timing, responses, remarks, signature and uploaded images.',
      'Structured storage of submissions for later reporting.',
    ],
    proposed: [
      'Offline mobile work and synchronisation after reconnecting are planned enhancements.',
    ],
    status:
      'Deployed on a Google Cloud virtual machine. The current web workflow generates digital checklist records and PDFs; offline mobile synchronisation is planned.',
  },
  {
    slug: 'ppm-closeout-automation',
    index: '04',
    title: 'Maximo PPM Closeout Automation',
    category: 'Process automation',
    context: 'Ejadah Asset Management Solutions — Dubai Hills Mall assignment',
    period: '2026',
    tint: '#f1e7dd',
    summary:
      'Power Automate Desktop driving the repetitive part of PPM closeout in Maximo: attach the report, enter labour and actual time, route the work order, repeat through a prepared list.',
    tools: ['Power Automate Desktop', 'IBM Maximo MAS 8'],
    overview: [
      'PPM closeout is a fixed sequence repeated once per completed visit. Power Automate Desktop was used to run that sequence through a prepared work order list under supervision, instead of by hand.',
    ],
    problem: [
      'Each closeout contains repeatable data-entry steps: opening the work order, attaching the matching PDF report, entering labour and actual time, and routing the record. Closeout decisions and verification remain supervised.',
      'Done by hand across a batch, it takes the hours that planning and reporting need, and the sequence is exactly the kind of task where attention slips near the end of a list.',
    ],
    contribution: [
      'Built the desktop flow: open a work order, attach the corresponding PDF report, enter labour and actual time, route the work order through closeout, then continue to the next record.',
      'Prepared the work order list the flow ran against.',
      'Ran the flow supervised, checking results as it progressed.',
    ],
    approach: [
      'Power Automate Desktop drives the Maximo interface step by step, which keeps the closeout pathway identical to the one a person would take. The flow is assisted rather than unattended: a prepared list goes in, and every run is watched because the actions change operational records.',
    ],
    delivered: [
      'A supervised run that completed approximately 80 PPM closeouts through the standard closeout process.',
    ],
    status:
      'Used as a supervised workflow, including a run of approximately 80 completed PPM closeouts.',
  },
  {
    slug: 'pets-at-home',
    index: '05',
    title: 'Pets@Home — Client Account at NielsenIQ',
    category: 'Client account experience',
    context: 'NielsenIQ (employer) · Pets@Home (client account) · Chennai, India',
    period: 'During NielsenIQ employment, 2023 – 2024',
    tint: '#e8e5f1',
    kind: 'account',
    cardCta: 'Account experience',
    problemTitle: 'What the work required',
    approachTitle: 'How the work was done',
    summary:
      'Retail client-account data processing, validation and delivery quality checks during my NielsenIQ analyst role.',
    // No tool is named here because the CV does not name one for this account.
    tools: [],
    overview: [
      'My role focused on preparing account data for delivery through established workflows, with attention to accuracy, quality and timeliness.',
    ],
    problem: [
      'Client data needed processing to the agreed structure, validation and timely delivery through established workflows.',
    ],
    contribution: [
      'Processed and validated business data for the client account using structured workflows and internal tools.',
      'Ran data quality checks on the account data before delivery.',
      'Supported accurate and timely delivery of client data.',
      'Worked to productivity, efficiency, quality and delivery targets.',
    ],
    approach: [
      'I followed the account workflow, carried out data checks and supported delivery within the agreed schedule.',
    ],
    delivered: [
      'Client data processed and validated as part of the account workflow.',
      'Quality checks supported delivery readiness.',
    ],
    status:
      'Client account experience within my NielsenIQ employment.',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export interface Capability {
  title: string
  body: string
}

export const capabilities: Capability[] = [
  {
    title: 'MIS and operational reporting',
    body: 'Daily, weekly and management reports from source systems: work orders, service-level agreement (SLA) performance, planned preventive maintenance (PPM), backlog ageing, failures and downtime.',
  },
  {
    title: 'Power BI and Excel dashboards',
    body: 'Power Query for data cleaning, DAX for calculations, and Power BI for interactive views. Key performance indicators (KPIs), service levels and backlog reports help teams see what needs attention.',
  },
  {
    title: 'CAFM planning and administration',
    body: 'Computer-aided facilities management (CAFM) with IBM Maximo MAS 8: maintenance scheduling, job plans, workgroups, service requests and work orders, connected to operational reporting.',
  },
  {
    title: 'Workflow and reporting automation',
    body: 'Power Automate Desktop for repeatable Maximo steps and Flask applications for digital checklists. People remain responsible for validation, exceptions and decisions.',
  },
]

export interface SkillGroup {
  title: string
  note?: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Analytics and reporting',
    items: ['Microsoft Excel', 'Power BI', 'Power Query', 'DAX', 'MIS reporting', 'KPI and SLA reporting', 'Dashboard development', 'Data cleaning and validation', 'Backlog ageing analysis', 'Operational performance reporting'],
  },
  {
    title: 'CAFM and maintenance systems',
    items: ['IBM Maximo MAS 8', 'Maximo Mobile', 'CAFM / CMMS workflows', 'Service request and work order management', 'PPM planning and scheduling', 'Job plans', 'KPI Manager', 'Maximo WHERE clause queries', 'Maintenance reporting'],
  },
  {
    title: 'Automation and application projects',
    items: ['Power Automate Desktop', 'Reporting and workflow automation', 'Python and Flask', 'ReportLab PDF generation', 'SQLite'],
  },
  {
    title: 'Additional business systems',
    note: 'Supporting exposure rather than a primary focus.',
    items: ['OGRDS', 'ISS / IKS', 'OWB', 'IDE', 'Microsoft Dynamics CRM'],
  },
]

export interface Role {
  title: string
  period: string
  summary: string
  points: string[]
  /** Named client accounts worked on inside the role. */
  accounts?: { name: string; note: string; href?: string }[]
  recognition?: string
}

export interface Employer {
  employer: string
  /** Omitted where the CV records no location or engagement type. */
  context?: string
  roles: Role[]
}

export const experience: Employer[] = [
  {
    employer: 'Ejadah Asset Management Solutions LLC',
    context: 'Dubai Hills Mall, EMAAR — Dubai, UAE',
    roles: [
      {
        title: 'CAFM Planner',
        period: 'November 2026 – present',
        summary:
          'Moved into the planner role on 1 November 2026, following the CAFM Administrator position on the same assignment. PPM scheduling, coordination, monitoring, reporting and operational follow-up.',
        points: [],
      },
      {
        title: 'CAFM Administrator',
        period: 'May 2025 – October 2026',
        summary:
          'Reporting, SLA monitoring and maintenance data administration for a live mall operation on IBM Maximo MAS 8.',
        points: [
          'Tracked service requests and work orders in Maximo from assignment through closeout.',
          'Supported preventive maintenance scheduling and checked completion against job plans.',
          'Monitored resolution deadlines, overdue work and backlog age by workgroup.',
          'Prepared reports on recurring failures and asset downtime for performance reviews, quality audits and nonconformance tracking.',
          'Queried Maximo and validated records across Excel and Power BI reports.',
          'Automated repetitive Maximo steps with Power Automate Desktop.',
        ],
        recognition: 'Certificate of Appreciation, Ejadah — August 2025',
      },
    ],
  },
  {
    employer: 'Invisible Technologies',
    roles: [
      {
        title: 'AI Data Trainer (Freelance)',
        period: 'October 2024 – early 2025',
        summary:
          'AI data training and evaluation tasks delivered against defined guidelines, with quality review of submitted work for consistency.',
        points: [],
      },
    ],
  },
  {
    employer: 'NielsenIQ',
    context: 'Chennai, India',
    roles: [
      {
        title: 'Data Processing Analyst',
        period: 'January 2023 – December 2024',
        summary:
          'High-volume data processing and validation, delivered against productivity, efficiency, quality and delivery targets.',
        points: [
          'Processed and validated business data using structured workflows and internal tools.',
          'Ran data quality checks before delivery.',
          'Supported accurate and timely delivery of client data.',
          'Worked to productivity, efficiency, quality and delivery targets.',
        ],
        accounts: [
          {
            name: 'Pets@Home — client account at NielsenIQ',
            note: 'Retail client account worked on during this role. NielsenIQ was the employer; Pets@Home was the client.',
            href: '/work/pets-at-home',
          },
        ],
        recognition: 'Employee of the Month, NielsenIQ — October 2023',
      },
    ],
  },
]

export interface AwardItem {
  title: string
  org: string
  date: string
  /** Only where the reason for the award is recorded; otherwise omitted. */
  note?: string
}

export const recognition: AwardItem[] = [
  {
    title: 'Certificate of Appreciation',
    org: 'Ejadah Asset Management Solutions',
    date: 'August 2025',
  },
  {
    title: 'Employee of the Month',
    org: 'NielsenIQ',
    date: 'October 2023',
  },
]

export interface EducationItem {
  title: string
  org: string
  period: string
  note?: string
}

export const education: EducationItem[] = [
  {
    title: 'MBA — Business Analytics',
    org: 'SRM University, online programme',
    period: '2023 – 2025',
  },
  {
    title: 'BA — Arabic and Islamic Studies',
    org: 'B.S. Abdur Rahman Crescent Institute',
    period: '2019 – 2022',
  },
]

export const certification = {
  title: 'Data Analytics — Tableau and Power BI',
  org: 'Greens Technology',
  period: 'October – December 2022',
}

export interface LearningItem {
  title: string
  period: string
  note: string
}

export const learning: LearningItem[] = [
  {
    title: 'IBM SkillsBuild — Data Analytics Fluency Pathway',
    period: 'Started September 2026',
    note: 'Course 1 completed; Course 2 started.',
  },
  {
    title: 'Microsoft 365 and Copilot learning modules',
    period: 'Ongoing',
    note: 'Continuing professional development.',
  },
]

export const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Working proficiency' },
  { name: 'Arabic', level: 'Academic background' },
]

export const interestedIn = [
  { heading: 'Analytics & reporting', roles: ['Data / MIS Analyst', 'Power BI / Reporting Analyst', 'Performance Analyst', 'Business / Systems Analyst'] },
  { heading: 'CAFM & systems', roles: ['CAFM Planner / Specialist', 'CAFM Administrator', 'FM Coordinator'] },
]
