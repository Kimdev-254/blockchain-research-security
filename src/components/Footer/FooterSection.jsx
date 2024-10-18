// components/Footer/FooterSection.jsx
export default function FooterSection({ title, children }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold font-orbitron">{title}</h3>
      {children}
    </div>
  )
}
