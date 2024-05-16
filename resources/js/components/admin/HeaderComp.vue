<template>
    <div id="header" class="mdk-header js-mdk-header m-0" data-fixed>
        <div class="mdk-header__content">
            <div
                class="navbar navbar-expand-sm navbar-main navbar-dark bg-dark pr-0"
                id="navbar"
                data-primary
            >
                <div class="container-fluid p-0">
                    <!-- Navbar toggler -->

                    <button
                        class="navbar-toggler navbar-toggler-right d-block d-md-none"
                        type="button"
                        data-toggle="sidebar"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Navbar Brand -->
                    <RouterLink to="/admin" class="navbar-brand">
                        <img
                            class="navbar-brand-icon"
                            :src="`/assets/images/Panensia-wt.png`"
                            width="22"
                            alt="Stack"
                        />
                        <span>Panensia</span>
                    </RouterLink>

                    <ul
                        class="nav navbar-nav d-none d-sm-flex border-left navbar-height align-items-center"
                    >
                        <li class="nav-item dropdown">
                            <a
                                href="#account_menu"
                                class="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                data-caret="false"
                            >
                                <span class="ml-1 d-flex-inline">
                                    <span class="text-light">Admin Panensia.</span>
                                </span>
                            </a>
                            <div id="account_menu" class="dropdown-menu dropdown-menu-right">
                                <div class="dropdown-item-text dropdown-item-text--lh">
                                    <div><strong>Adrian Demian</strong></div>
                                    <div>@adriandemian</div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <RouterLink class="dropdown-item" to="/admin">Dashboard</RouterLink>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
