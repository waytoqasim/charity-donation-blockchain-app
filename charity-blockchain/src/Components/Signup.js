import React from 'react'

export default function Signup() {
  return (
    <>
    
<div class="relative py-16
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
    <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">

        <div class="m-auto space-y-8 md:w-8/12 lg:">
            
            <div class="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
                <div class="p-6 sm:p-16">
                    <h2 class="mb-8 text-2xl text-cyan-900 font-bold">Sign Up to Charity DApp</h2>
                    <form action="" class="space-y-8">
                        <div class="space-y-2">
                            <label for="email" class="text-gray-700">Email</label>
                            <input  type="email" name="email" id="email" 
class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400"
                            />
                        </div>

                        <div class="space-y-2">
                            <label for="email" class="text-gray-700">Email</label>
                            <input  type="email" name="email" id="email" 
class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400"
                            />
                        </div>

                        <div class="space-y-2">
                            <label for="email" class="text-gray-700">Email</label>
                            <input  type="email" name="email" id="email" 
class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400"
                            />
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="pwd" class="text-gray-700">Password</label>
                                <button class="p-2 -mr-2" type="reset">
                                    <span class="text-sm text-sky-500">Forgot your password ?</span>
                                </button>
                            </div>
                            <input  type="password" name="pwd" id="pwd" 
                                    class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                        focus:ring-2 focus:ring-sky-300 focus:outline-none
                                        invalid:ring-2 invalid:ring-red-400"
                           />
                        </div>

                        <button type="submit" 
                                class="w-full py-3 px-6 rounded-md bg-sky-600
                                    focus:bg-sky-700 active:bg-sky-500">
                            <span class="text-white">Continue</span>
                        </button>

                        <p class="border-t pt-6 text-sm">
                            Already Have a Account  ?  
                            <a href="/Login" class="text-sky-500"> Log In</a>
                        </p>
                    </form>
                </div>
            </div>
          
        </div>
    </div>
</div>
                                
    </>
  )
}
