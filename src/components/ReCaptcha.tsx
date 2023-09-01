import * as React from "react"

export const useGoogleReCaptchaV3 = () => {
  const executeReCaptcha = React.useCallback(
    async (action?: string): Promise<string> => {
      return new Promise(resolve => {
        grecaptcha.ready(() => {
          grecaptcha
            .execute("6Lccg-0nAAAAAFmCdefGBIUPLaYk386nczhBhJD9", {
              action: "homepage",
            })
            .then(
              token =>
                (document.getElementById("captchaResponse").value = token),
            )
        })
      })
    },
    [],
  )
}

// https://docs.getform.io/features/spam-filtering/recaptcha-v3/
// https://www.google.com/recaptcha/admin/site/669877020/setup
// https://codesandbox.io/s/typescript-google-re-captcha-v3-react-hooks-znj97?file=/src/hooks/useGoogleReCaptchaV3.ts:2262-2271
