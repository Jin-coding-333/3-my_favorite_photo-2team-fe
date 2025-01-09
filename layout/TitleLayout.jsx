export default function TitleLayout({children}) {
  return (
    <div 
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 220px',
      }}
    >
      {children}
    </div>
  )
}
