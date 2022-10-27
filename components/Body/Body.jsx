// import Gradio from "./Gradio";

import Gradio from './Gradio'

export default function Body() {
  return (
    <>
      {/* <Gradio /> */}
      <script
        type="module"
        src="https://gradio.s3-us-west-2.amazonaws.com/3.0.18/gradio.js"
        async
      ></script>
      <gradio-app space="abidlabs/pytorch-image-classifier"></gradio-app>
      <style jsx>{``}</style>
    </>
  )
}
