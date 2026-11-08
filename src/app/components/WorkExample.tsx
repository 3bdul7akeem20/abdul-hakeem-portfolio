const examples = {
  'operational-reporting': {
    title: 'Read a daily backlog report',
    columns: ['Workgroup', 'Open', 'Overdue'],
    rows: [['Electrical', '5', '1'], ['Mechanical', '3', '2']],
    note: 'At the morning review, mechanical has fewer open jobs but two of the three overdue jobs. Review those two with the mechanical lead first.',
  },
  'prs-performance-reporting': {
    title: 'Trace a completion measure',
    columns: ['Work order', 'Type', 'Status'],
    rows: [['DEMO-01', 'Planned', 'Closed'], ['DEMO-02', 'Planned', 'Open'], ['DEMO-03', 'Reactive', 'Closed']],
    note: 'Filter to planned work. One of the two remaining orders is closed, so the completion card reads 50%. Clearing the type filter gives two of three closed. The denominator changes with the report scope.',
  },
  'digital-ppm': {
    title: 'Inspect a checklist record',
    columns: ['Record field', 'Example submission'],
    rows: [['Work order', 'DEMO-04'], ['Job plan', 'Plant room visual inspection'], ['Visit', '09:10–09:25'], ['Access route clear?', 'Yes'], ['Equipment label legible?', 'No'], ['Technician remarks', 'Label faded. Request a replacement.']],
    note: 'The work-order reference connects the visit to its checklist. Keeping the response and remark together lets a reviewer see which check needs follow-up in the PDF.',
  },
  'ppm-closeout-automation': {
    title: 'Walk through one supervised closeout',
    columns: ['Step', 'Worked example'],
    rows: [['Select', 'Open DEMO-04 from the prepared list.'], ['Match', 'Check that the report carries reference DEMO-04.'], ['Record', 'Attach the matching report and enter the 15-minute visit.'], ['Review', 'Verify the entry and routing before moving to the next order.']],
    note: 'A report labelled DEMO-05 would need review before attachment to DEMO-04. This is the kind of mismatch the supervisor can catch.',
  },
}

export function WorkExample({ slug }: { slug: string }) {
  if (!Object.hasOwn(examples, slug)) return null
  const example = examples[slug as keyof typeof examples]
  return (
    <details className="max-w-2xl rounded-card border border-line bg-surface p-5">
      <summary className="cursor-pointer font-medium">{example.title}</summary>
      <p className="my-4 text-sm text-muted">Synthetic example · Fictional records created for this portfolio.</p>
      <table className="w-full text-left text-sm">
        <thead><tr>{example.columns.map(label => <th key={label} scope="col" className="border-b border-line p-2">{label}</th>)}</tr></thead>
        <tbody>{example.rows.map(row => (
          <tr key={row[0]}>{row.map((value, i) => <td key={i} className="border-b border-line p-2 align-top">{value}</td>)}</tr>
        ))}</tbody>
      </table>
      <p className="mt-4 leading-relaxed">{example.note}</p>
    </details>
  )
}
