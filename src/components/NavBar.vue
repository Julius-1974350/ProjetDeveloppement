<template>    
    <body class="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
        <!-- Loader Start -->
        <!-- <div id="preloader">
            <div id="status">
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>
        </div> -->
        <!-- Loader End -->


        <div class="page-wrapper toggled">
            <!-- sidebar-wrapper -->
            <nav id="sidebar" class="sidebar-wrapper sidebar-dark">
                <div class="sidebar-content">
                    <div class="sidebar-brand">
                        <a href="index.html"><img src="../assets/images/logo-light.png" height="24" alt=""></a>
                    </div>
        
                    <ul class="sidebar-menu border-t border-white/10" data-simplebar style="height: calc(100% - 70px);">
                        <li class="sidebar-dropdown">
                            <a href="javascript:void(0)"><i class="uil uil-user me-2"></i>User Profile</a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li><a href="profile.html">Profile</a></li>
                                    <li><a href="profile-billing.html">Billing Info</a></li>
                                    <li><a href="profile-payment.html">Payment</a></li>
                                    <li><a href="profile-social.html">Social Profile</a></li>
                                    <li><a href="profile-notification.html">Notifications</a></li>
                                    <li><a href="profile-setting.html">Profile Settings</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="relative lg:m-8 m-6 px-8 py-10 rounded-lg bg-gradient-to-b to-transparent from-slate-800 text-center">
                            <span class="relative z-10">
                                <span class="text-xl font-bold h5 text-white">Upgrade to Pro</span>

                                <span class="text-slate-400 mt-3 mb-5 block">Get one month free and subscribe to pro</span>

                                <a href="https://1.envato.market/techwind" target="_blank" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-gray-500/5 hover:bg-gray-500 border-gray-500/10 hover:border-gray-500 text-white rounded-md">Subscribe</a>
                            </span>
                
                            <img src="../assets/images/shree-276.png" class="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto text-center h-40 w-40 z-0 opacity-5" alt="">
                        </li>
                    </ul>
                    <!-- sidebar-menu  -->
                </div>
            </nav>
            <!-- sidebar-wrapper  -->

            <!-- Start Page Content -->
            <main class="page-content bg-gray-50 dark:bg-slate-800">
                <!-- Top Header -->
                <div class="top-header">
                    <div class="header-bar flex justify-between">
                        <div class="flex items-center space-x-1">
                            <!-- Logo -->
                            <a href="#" class="xl:hidden block me-2">
                                <img src="../assets/images/logo-icon-32.png" class="md:hidden block" alt="">
                                <span class="md:block hidden">
                                    <img src="../assets/images/logo-dark.png" class="inline-block dark:hidden" alt="">
                                    <img src="../assets/images/logo-light.png" class="hidden dark:inline-block" alt="">
                                </span>
                            </a>
                            <!-- Logo -->

                            <!-- show or close sidebar -->
                            <a id="close-sidebar" class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" href="javascript:void(0)">
                                <i data-feather="menu" class="h-4 w-4"></i>
                            </a>
                            <!-- show or close sidebar -->
            
                            <!-- Searchbar -->
                            <div class="ps-1.5">
                                <div class="form-icon relative sm:block hidden">
                                    <i class="uil uil-search absolute top-1/2 -translate-y-1/2 start-3"></i>
                                    <input type="text" class="form-input w-56 ps-9 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search...">
                                </div>
                            </div>
                            <!-- Searchbar -->
                        </div>

                        <ul class="list-none mb-0 space-x-1">
                            <!-- Notification Dropdown -->
                            <li class="dropdown inline-block relative">
                                <button data-dropdown-toggle="dropdown" class="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                    <i data-feather="bell" class="h-4 w-4"></i>
                                    <span class="absolute top-0 end-0 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-red-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                </button>
                                <!-- Dropdown menu -->
                                <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onclick="event.stopPropagation();">
                                    <span class="px-4 py-4 flex justify-between">
                                        <span class="font-semibold">Notifications</span>
                                        <span class="flex items-center justify-center bg-red-600/20 text-red-600 text-[10px] font-bold rounded-full w-5 max-h-5 ms-1">3</span>
                                    </span>
                                    <ul class="py-2 text-start h-64 border-t border-gray-100 dark:border-gray-800" data-simplebar>
                                        <li>
                                            <a href="" class="block font-medium py-1.5 px-4">
                                                <div class="flex items-center">
                                                    <div class="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                        <i data-feather="shopping-cart" class="h-4 w-4"></i>
                                                    </div>
                                                    <div class="ms-2">
                                                        <span class="text-[15px] font-semibold block">Order Complete</span>
                                                        <small class="text-slate-400">15 min ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" class="block font-medium py-1.5 px-4">
                                                <div class="flex items-center">
                                                    <img src="../assets/images/client/04.jpg" class="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt="">
                                                    <div class="ms-2">
                                                        <span class="text-[15px] font-semibold block"><span class="font-bold">Message</span> from Luis</span>
                                                        <small class="text-slate-400">1 hour ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" class="block font-medium py-1.5 px-4">
                                                <div class="flex items-center">
                                                    <div class="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                        <i data-feather="dollar-sign" class="h-4 w-4"></i>
                                                    </div>
                                                    <div class="ms-2">
                                                        <span class="text-[15px] font-semibold block"><span class="font-bold">One Refund Request</span></span>
                                                        <small class="text-slate-400">2 hour ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" class="block font-medium py-1.5 px-4">
                                                <div class="flex items-center">
                                                    <div class="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                        <i data-feather="truck" class="h-4 w-4"></i>
                                                    </div>
                                                    <div class="ms-2">
                                                        <span class="text-[15px] font-semibold block">Deliverd your Order</span>
                                                        <small class="text-slate-400">Yesterday</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" class="block font-medium py-1.5 px-4">
                                                <div class="flex items-center">
                                                    <img src="../assets/images/client/05.jpg" class="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt="">
                                                    <div class="ms-2">
                                                        <span class="text-[15px] font-semibold block"><span class="font-bold">Cally</span> started following you</span>
                                                        <small class="text-slate-400">2 days ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li><!--end dropdown-->
                            <!-- Notification Dropdown -->
            
                            <!-- User/Profile Dropdown -->
                            <li class="dropdown inline-block relative">
                                <button data-dropdown-toggle="dropdown" class="dropdown-toggle items-center" type="button">
                                    <span class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><img src="../assets/images/client/05.jpg" class="rounded-full" alt=""></span>
                                    <span class="font-semibold text-[16px] ms-1 sm:inline-block hidden">Cristina Murfy</span>
                                </button>
                                <!-- Dropdown menu -->
                                <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onclick="event.stopPropagation();">
                                    <ul class="py-2 text-start">
                                        <li>
                                            <a href="profile.html" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-user me-2"></i>Profile</a>
                                        </li>
                                        <li>
                                            <a href="chat.html" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-comment me-2"></i>Chat</a>
                                        </li>
                                        <li>
                                            <a href="email.html" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-envelope me-2"></i>Email</a>
                                        </li>
                                        <li>
                                            <a href="profile-setting.html" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-setting me-2"></i>Settings</a>
                                        </li>
                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                        <li>
                                            <a href="lock-screen.html" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-lock me-2"></i>Lockscreen</a>
                                        </li>
                                        <li>
                                            <a href="login.html" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-sign-out-alt me-2"></i>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li><!--end dropdown-->
                            <!-- User/Profile Dropdown -->
                        </ul>
                    </div>
                </div>
                <!-- Top Header -->
                <!-- End -->
            </main>
            <!--End page-content" -->
        </div>
        <!-- page-wrapper -->

        <!-- Switcher -->
        <div class="fixed top-[30%] -end-3 z-50">
            <span class="relative inline-block rotate-90">
                <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" />
                <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-700 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i class="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i class="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
                </label>
            </span>
        </div>
        <!-- Switcher -->

        <!-- LTR & RTL Mode Code -->
        <div class="fixed top-[40%] -end-3 z-50">
            <a href="" id="switchRtl">
                <span class="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-700 font-bold rtl:block ltr:hidden" >LTR</span>
                <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-700 font-bold ltr:block rtl:hidden">RTL</span>
            </a>
        </div>
        <!-- LTR & RTL Mode Code -->
    </body>
</template>

<script setup lang="ts"></script>

<style scoped></style>
