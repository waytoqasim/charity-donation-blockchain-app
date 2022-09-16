import React from 'react'

export default function Team() {
  return (
    <>
    
<div class="py-20 bg-white">
    <div class="container mx-auto px-6 md:px-12 text-center">
        <div class="mb-16">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Our Team</h2>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto">With over 2 Months of Experience Our Team is Leading In Blockchain Development across the Country</p>
        </div>
        <div class="py-20 grid gap-28 md:gap-12 md:grid-cols-2">
            

            <div class="border-t-4 space-y-8 group">
                <div class="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                    <img class="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]" 
                        src="https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/275297505_5193924010672279_5200067821551204791_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WCRBMQL2EokAX8-9vyO&_nc_ht=scontent.flhe5-1.fna&oh=00_AT_LXZDPAyFdtInWxgyCv7teHMIsmzgYKOmOZYoL6DB_0g&oe=6322259C" alt="woman" loading="lazy" width="1000" height="667" />
                </div>
                <div class="space-y-4 text-center">
                    <div>
                        <h4 class="text-2xl">Qasim Saeed</h4>
                        <span class="block text-sm text-gray-500">CEO Run for Charity</span>
                    </div>
                    <a href="#" class="block w-max mx-auto text-blue-600">View Bio</a>
                </div>
            </div>

            <div class="border-t-4 space-y-8 group">
                <div class="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                    <img class="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]" 
                        src="https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/271658936_917077512504121_5960076601106826801_n.jpg?stp=cp0_dst-jpg_e15_q65_s120x120&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=wt5liHw_X-AAX-34hke&_nc_ht=scontent.flhe7-1.fna&oh=00_AT8nqlRDwq4SmqzFbGECnKUXzxSUc9MrupQjiHRumV8euQ&oe=632311C0" alt="man" loading="lazy" width="1000" height="667" />
                </div>
                <div class="space-y-4 text-center">
                    <div>
                        <h4 class="text-2xl">Abdul Wahab</h4>
                        <span class="block text-sm text-gray-500">Project Manager</span>
                    </div>
                    <a href="#" class="block w-max mx-auto text-blue-600">View Bio</a>
                </div>
            </div>
        </div>
        <button type="button" title="Start buying" class="w-max mx-auto py-3 px-6 text-center rounded-full transition border border-blue-200 active:bg-blue-200 focus:bg-blue-100">
            <span class="block text-blue-600 font-semibold text-sm">
                Load more...
            </span>
        </button>
    </div>
</div>
                                
    </>
  )
}
