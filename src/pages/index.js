import { Divider, Input } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex items-center justify-center w-full">
        <div className="hidden border-2 border-slate-400 lg:block">
          <div style={{ height: "650px" }}>
            <img
              className="w-full h-full"
              src="https://d1j8r0kxyu9tj8.cloudfront.net/files/7vjyIBkDbfG0cIHDQwOwWxghLZ0kaOIrqFNUsYEb.jpg"
            />
          </div>
        </div>
        <div
          className="flex flex-col px-5 border-2 border-slate-400"
          style={{ height: "650px", width: "500px" }}
        >
          <div className="flex items-center ">
            <div>
              <img
                className="w-full"
                src="https://d1j8r0kxyu9tj8.cloudfront.net/files/3ZjcK7HfCyG0Go3A2ZLNYjprYvfpVcJ1K9QYvXAs.png"
              />
            </div>
            <div
              className="pl-5 text-2xl font-medium"
              style={{ color: "#5252f2" }}
            >
              EduTrack
            </div>
          </div>
          <div className="text-xl font-bold pt-7">Nice to see you again</div>
          <div className="pt-5">
            <Input
              type="text"
              label="login"
              labelPlacement="outside"
              placeholder="Email or phone number"
            />
          </div>
          <div className="pt-5">
            <Input
              type="text"
              variant="flat"
              label="Password"
              labelPlacement="outside"
              placeholder="Enter password"
              endContent={
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="1em"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path
                    d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
                    fill="currentColor"
                  />
                </svg>
              }
            />
          </div>
          <div className="flex pt-5">
            <div className="w-1/2">
              <Switch defaultSelected>Remember me</Switch>
            </div>
            <div className="flex justify-end w-1/2 pl-5">
              <Link href="#">Forgot password?</Link>
            </div>
          </div>
          <Link href="/home">
            <div className="w-full pt-5 pb-5">
              <Button
                color="primary"
                className="w-full"
                style={{ backgroundColor: "#8380fe" }}
              >
                Sign In
              </Button>
            </div>
          </Link>
          <Divider className="my-6" />
          <div className="pt-5">
            <Button
              className="w-full"
              style={{ backgroundColor: "#333333", color: "white" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 262"
                id="google"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
              Or sign in with Google
            </Button>
          </div>
          <div className="flex justify-center pt-5">
            <div>Dont have an account?</div>
            <div>
              <Link href="#">Sign up now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
