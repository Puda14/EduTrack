import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Divider,
  Badge,
  Avatar,
} from "@nextui-org/react";

export default function UserIntro() {
  return (
    <Card className="grid hidden h-full grid-cols-4 sm:grid">
      <div className="flex items-center justify-center ">
        <Avatar
          isBordered
          as="button"
          className="w-20 h-20 transition-transform"
          color="secondary"
          name="Jason Hughes"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </div>

      <div className="flex flex-col col-span-3">
        <div className="pt-3 text-lg font-bold uppercase">natalie</div>
        <div className="pb-4 font-semibold">Lecturer</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et
        </div>
        <div className="flex items-center py-5">
          <div className="pt-2 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              id="github"
            >
              <path
                fill-rule="evenodd"
                d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
              ></path>
            </svg>
          </div>
          <div className="pl-2 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              id="google-meet"
            >
              <path
                fill="#00ac47"
                d="M24,21.45V25a2.0059,2.0059,0,0,1-2,2H9V21h9V16Z"
              ></path>
              <polygon
                fill="#31a950"
                points="24 11 24 21.45 18 16 18 11 24 11"
              ></polygon>
              <polygon fill="#ea4435" points="9 5 9 11 3 11 9 5"></polygon>
              <rect width="6" height="11" x="3" y="11" fill="#4285f4"></rect>
              <path
                fill="#ffba00"
                d="M24,7v4h-.5L18,16V11H9V5H22A2.0059,2.0059,0,0,1,24,7Z"
              ></path>
              <path
                fill="#0066da"
                d="M9,21v6H5a2.0059,2.0059,0,0,1-2-2V21Z"
              ></path>
              <path
                fill="#00ac47"
                d="M29,8.26V23.74a.9989.9989,0,0,1-1.67.74L24,21.45,18,16l5.5-5,.5-.45,3.33-3.03A.9989.9989,0,0,1,29,8.26Z"
              ></path>
              <polygon
                fill="#188038"
                points="24 10.55 24 21.45 18 16 23.5 11 24 10.55"
              ></polygon>
            </svg>
          </div>
          <div className="pl-2 pr-2">
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
          </div>
        </div>
      </div>
    </Card>
  );
}
