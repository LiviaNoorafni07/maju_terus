<!--begin::sidebar menu-->
<div class="app-sidebar-menu overflow-hidden flex-column-fluid">
    <!--begin::Menu wrapper-->
    <div id="kt_app_sidebar_menu_wrapper" class="app-sidebar-wrapper">
        <!--begin::Scroll wrapper-->
        <div id="kt_app_sidebar_menu_scroll" class="scroll-y my-5 mx-3" data-kt-scroll="true"
            data-kt-scroll-activate="true" data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
            data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
            <!--begin::Menu-->
            <div class="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6" id="#kt_app_sidebar_menu"
                data-kt-menu="true" data-kt-menu-expand="false">
                <!--begin:Menu item-->
                <div data-kt-menu-trigger="click" class="menu-item here show menu-accordion">
                    <!--begin:Menu item-->
                    {{-- <div class="menu-item">
                        <!--begin:Menu link--><a class="menu-link active" href="/dashboard"><span
                                class="menu-bullet"><span class="bullet bullet-dot"></span></span><span
                                class="menu-title">Dashboard</span></a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                    <!--begin:Menu item-->
                    <div class="menu-item">
                        <!--begin:Menu link--><a class="menu-link" href="/news"><span class="menu-bullet"><span
                                    class="bullet bullet-dot"></span></span><span class="menu-title">News</span></a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item--> --}}

                    <?php
                    $current_page = basename($_SERVER['REQUEST_URI'], ".php");
                    ?>
                    <div class="menu-item">
                        <a class="menu-link <?php echo $current_page == 'dashboard' || $current_page == '' ? 'active' : ''; ?>"
                            href="/dashboard">
                            <span class="menu-bullet"><span class="bullet bullet-dot"></span></span>
                            <span class="menu-title">Dashboard</span>
                        </a>
                    </div>

                    <div class="menu-item">
                        <a class="menu-link <?php echo $current_page == 'news' ? 'active' : ''; ?>" href="/news">
                            <span class="menu-bullet"><span class="bullet bullet-dot"></span></span>
                            <span class="menu-title">News</span>
                        </a>
                    </div>
                    <div class="menu-sub menu-sub-accordion">
                        <!--begin:Menu item-->
                        
                        <!--end:Menu item-->
                    </div>
                    <!--end:Menu sub-->
                    {{-- <div class="menu-item">
                        <!--begin:Menu link--><a class="menu-link" href="?page=dashboards/projects"><span
                                class="menu-bullet"><span class="bullet bullet-dot"></span></span><span
                                class="menu-title">Grafik</span></a>
                        <!--end:Menu link-->
                    </div> --}}
                </div>
                <div class="menu-item">
                    <!--begin:Menu link--><a class="menu-link" href="/products"><span class="menu-bullet"><span
                                class="bullet bullet-dot"></span></span><span class="menu-title">Tambah
                            Barang</span></a>
                    <!--end:Menu link-->
                </div>
                <!--end:Menu item-->
                <!--begin:Menu item-->
                <div class="menu-item">
                    <!--begin:Menu link--><a class="menu-link" href="?page=pages/user-profile/projects"><span
                            class="menu-bullet"><span class="bullet bullet-dot"></span></span><span
                            class="menu-title">Tambah
                            Karyawan</span></a>
                    <!--end:Menu link-->
                </div>
                <!--end:Menu item-->
                <!--begin:Menu item-->
            </div>
            <!--end::Menu-->
        </div>
        <!--end::Scroll wrapper-->
    </div>
    <!--end::Menu wrapper-->
</div>
<!--end::sidebar menu-->