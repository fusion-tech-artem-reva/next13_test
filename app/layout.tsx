import RootContextProvider from '../context/RootContextProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <RootContextProvider>
          {children}
        </RootContextProvider>
      </body>
    </html>
  )
}
