import Script from 'next/script'

export default function Gradio() {
  return (
    <>
      {/* <script src="https://gradio.s3-us-west-2.amazonaws.com/3.7/gradio.js" async />
      <gradio-app space="abidlabs/pytorch-image-classifier"></gradio-app> */}
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
