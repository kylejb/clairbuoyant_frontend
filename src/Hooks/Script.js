import { useEffect } from 'react';

// const useScript = url => {
//   useEffect(() => {
//     const script = document.createElement('script');

//     script.src = url;
//     script.type = "text/babel"
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//         document.body.removeChild(script);
//       }
//   }, [url]);
// };

// export default useScript;

const useScript = (url, async) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = "text/jsx"
    script.src = url
    script.async = (typeof async === 'undefined' ? true : async )

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

export default function Script({ src, async=true}) {

  useScript(src, async)

  return null  // Return null is necessary for the moment.
}