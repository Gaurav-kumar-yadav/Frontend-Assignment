"use client";
import React from "react";

export default function Signup(): JSX.Element {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        
        <div className="relative w-[459px] h-[312px] rounded-3xl backdrop-blur-[20px] bg-[hsla(0,0%,0%,0.2)] flex flex-col justify-center items-center">
          <div className="w-[319px] h-[235px] flex flex-col justify-center items-center">
            
            
            <div className="flex justify-center items-center mb-4">
              <img src="/assets/image.png" className="w-[49px] h-[49px]" alt="Forescribe Logo" />
            </div>

            
            <div className="flex justify-center items-center mb-4">
              <p className="font-sans font-semibold text-[22px] leading-[100%] text-white bg-transparent">
                Welcome to Forescribe
              </p>
            </div>

            
            <div className="w-[319px] h-[43px] bg-[hsla(264,100%,62%,1)] rounded-[9px] flex justify-center items-center mb-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_hsla(264,100%,62%,0.6)]">
              <img src="/assets/google-icon.png" className="h-[22px] w-[22px]" alt="Google Icon" />
              <p className="font-[Poppins] font-normal text-[16px] leading-[30px] tracking-[0%] ml-4">
                Continue with Google
              </p>
            </div>

            
            <div className="w-[319px] h-[43px] bg-[hsla(0,0%,29%,1)] rounded-[9px] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_hsla(0,0%,29%,0.6)]">
              <img src="/assets/Group.svg" className="h-[22px] w-[22px]" alt="Microsoft Icon" />
              <p className="font-[Poppins] font-normal text-[16px] leading-[30px] tracking-[0%] ml-4">
                Continue with Microsoft
              </p>
            </div>
          </div>
        </div>

        
        <div className="flex justify-center items-center w-[459px] h-auto mt-4 rounded-md px-4 py-3 bg-[hsla(0,0%,100%,0.1)] backdrop-blur-[10px] border border-[hsla(0,0%,100%,0.2)]">
          <p className="text-center text-[14px] leading-[22px] text-[hsla(0,0%,100%,0.85)] font-[Poppins]">
            By clicking{" "}
            <span className="font-medium">
              "Continue with Google/Microsoft"
            </span>{" "}
            above, you acknowledge that you have read and understood, and agree
            to Forescribe’s{" "}
            <a className="underline text-[hsla(264,100%,62%,1)] hover:text-[hsla(264,100%,72%,1)] transition duration-200 cursor-pointer">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a className="underline text-[hsla(264,100%,62%,1)] hover:text-[hsla(264,100%,72%,1)] transition duration-200 cursor-pointer">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
