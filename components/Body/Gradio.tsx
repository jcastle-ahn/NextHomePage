import Script from 'next/script'

export default function Gradio() {
  return (
    <>
      <div className="iframebox">
        <iframe src="https://hf.space/embed/jcastle/StableDiffusion/+"></iframe>
      </div>
      <style jsx>{`
        .iframebox {
          position: relative;
          width: 100%;
          padding-bottom: 28%;
        }
        .iframebox iframe {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  )
}
