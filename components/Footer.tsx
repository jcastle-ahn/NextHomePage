export default function Footer() {
  return (
    <>
      <footer className="pt-4">
        <div className="text-center">
          <a href="mailto:jcastle.ahn@gmail.com">
            Email : jcastle.ahn@gmail.com
          </a>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: black;
          color: white;
          height: 80px;
        }
        .border {
          border-style: solid;
          border-width: 5px;
          border-color: white;
        }
      `}</style>
    </>
  )
}
