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
