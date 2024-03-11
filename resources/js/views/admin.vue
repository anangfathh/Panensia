<template>
    <div class="preloader"></div>

    <!-- Header Layout -->
    <div class="mdk-header-layout js-mdk-header-layout">
        <!-- Header -->

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
                        <a href="index.html" class="navbar-brand">
                            <img
                                class="navbar-brand-icon"
                                src="assets/images/stack-logo-white.svg"
                                width="22"
                                alt="Stack"
                            />
                            <span>Stack</span>
                        </a>

                        <form class="search-form d-none d-sm-flex flex" action="index.html">
                            <button class="btn" type="submit" role="button">
                                <i class="material-icons">search</i>
                            </button>
                            <input type="text" class="form-control" placeholder="Search" />
                        </form>

                        <ul class="nav navbar-nav ml-auto d-none d-md-flex">
                            <li class="nav-item dropdown">
                                <!-- <a
                    href="#notifications_menu"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    data-caret="false"
                  >
                    <i
                      class="material-icons nav-icon navbar-notifications-indicator"
                      >notifications</i
                    >
                  </a> -->
                                <div
                                    id="notifications_menu"
                                    class="dropdown-menu dropdown-menu-right navbar-notifications-menu"
                                >
                                    <div class="dropdown-item d-flex align-items-center py-2">
                                        <span class="flex navbar-notifications-menu__title m-0"
                                            >Notifications</span
                                        >
                                        <a href="javascript:void(0)" class="text-muted"
                                            ><small>Clear all</small></a
                                        >
                                    </div>
                                    <div class="navbar-notifications-menu__content" data-simplebar>
                                        <div class="py-2">
                                            <div class="dropdown-item d-flex">
                                                <div class="mr-3">
                                                    <div
                                                        class="avatar avatar-sm"
                                                        style="width: 32px; height: 32px"
                                                    >
                                                        <img
                                                            src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg"
                                                            alt="Avatar"
                                                            class="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="flex">
                                                    <a href="">A.Demian</a> left a comment on
                                                    <a href="">Stack</a><br />
                                                    <small class="text-muted">1 minute ago</small>
                                                </div>
                                            </div>
                                            <div class="dropdown-item d-flex">
                                                <div class="mr-3">
                                                    <a href="#">
                                                        <div
                                                            class="avatar avatar-xs"
                                                            style="width: 32px; height: 32px"
                                                        >
                                                            <span
                                                                class="avatar-title bg-purple rounded-circle"
                                                                ><i class="material-icons icon-16pt"
                                                                    >person_add</i
                                                                ></span
                                                            >
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="flex">
                                                    New user <a href="#">Peter Parker</a> signed
                                                    up.<br />
                                                    <small class="text-muted">1 hour ago</small>
                                                </div>
                                            </div>
                                            <div class="dropdown-item d-flex">
                                                <div class="mr-3">
                                                    <a href="#">
                                                        <div
                                                            class="avatar avatar-xs"
                                                            style="width: 32px; height: 32px"
                                                        >
                                                            <span
                                                                class="avatar-title rounded-circle"
                                                                >JD</span
                                                            >
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="flex">
                                                    <a href="#">Big Joe</a>
                                                    <small class="text-muted">wrote:</small><br />
                                                    <div>
                                                        Hey, how are you? What about our next
                                                        meeting
                                                    </div>
                                                    <small class="text-muted">2 minutes ago</small>
                                                </div>
                                            </div>

                                            <div class="dropdown-item d-flex">
                                                <div class="mr-3">
                                                    <div
                                                        class="avatar avatar-sm"
                                                        style="width: 32px; height: 32px"
                                                    >
                                                        <img
                                                            src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg"
                                                            alt="Avatar"
                                                            class="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="flex">
                                                    <a href="">A.Demian</a> left a comment on
                                                    <a href="">Stack</a><br />
                                                    <small class="text-muted">1 minute ago</small>
                                                </div>
                                            </div>
                                            <div class="dropdown-item d-flex">
                                                <div class="mr-3">
                                                    <a href="#">
                                                        <div
                                                            class="avatar avatar-xs"
                                                            style="width: 32px; height: 32px"
                                                        >
                                                            <span
                                                                class="avatar-title bg-purple rounded-circle"
                                                                ><i class="material-icons icon-16pt"
                                                                    >person_add</i
                                                                ></span
                                                            >
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="flex">
                                                    New user <a href="#">Peter Parker</a> signed
                                                    up.<br />
                                                    <small class="text-muted">1 hour ago</small>
                                                </div>
                                            </div>
                                            <div class="dropdown-item d-flex">
                                                <div class="mr-3">
                                                    <a href="#">
                                                        <div
                                                            class="avatar avatar-xs"
                                                            style="width: 32px; height: 32px"
                                                        >
                                                            <span
                                                                class="avatar-title rounded-circle"
                                                                >JD</span
                                                            >
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="flex">
                                                    <a href="#">Big Joe</a>
                                                    <small class="text-muted">wrote:</small><br />
                                                    <div>
                                                        Hey, how are you? What about our next
                                                        meeting
                                                    </div>
                                                    <small class="text-muted">2 minutes ago</small>
                                                </div>
                                            </div>

                                            <div class="dropdown-item d-flex">
                                                <div class="mr-3">
                                                    <div
                                                        class="avatar avatar-sm"
                                                        style="width: 32px; height: 32px"
                                                    >
                                                        <img
                                                            src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg"
                                                            alt="Avatar"
                                                            class="avatar-img rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="flex">
                                                    <a href="">A.Demian</a> left a comment on
                                                    <a href="">Stack</a><br />
                                                    <small class="text-muted">1 minute ago</small>
                                                </div>
                                            </div>
                                            <div class="dropdown-item d-flex">
                                                <div class="mr-3">
                                                    <a href="#">
                                                        <div
                                                            class="avatar avatar-xs"
                                                            style="width: 32px; height: 32px"
                                                        >
                                                            <span
                                                                class="avatar-title bg-purple rounded-circle"
                                                                ><i class="material-icons icon-16pt"
                                                                    >person_add</i
                                                                ></span
                                                            >
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="flex">
                                                    New user <a href="#">Peter Parker</a> signed
                                                    up.<br />
                                                    <small class="text-muted">1 hour ago</small>
                                                </div>
                                            </div>
                                            <div class="dropdown-item d-flex">
                                                <div class="mr-3">
                                                    <a href="#">
                                                        <div
                                                            class="avatar avatar-xs"
                                                            style="width: 32px; height: 32px"
                                                        >
                                                            <span
                                                                class="avatar-title rounded-circle"
                                                                >JD</span
                                                            >
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="flex">
                                                    <a href="#">Big Joe</a>
                                                    <small class="text-muted">wrote:</small><br />
                                                    <div>
                                                        Hey, how are you? What about our next
                                                        meeting
                                                    </div>
                                                    <small class="text-muted">2 minutes ago</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="javascript:void(0);"
                                        class="dropdown-item text-center navbar-notifications-menu__footer"
                                        >View All</a
                                    >
                                </div>
                            </li>
                        </ul>

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
                                    <img
                                        src="assets/images/avatar/demi.png"
                                        class="rounded-circle"
                                        width="32"
                                        alt="Frontted"
                                    />
                                    <span class="ml-1 d-flex-inline">
                                        <span class="text-light">Adrian D.</span>
                                    </span>
                                </a>
                                <div id="account_menu" class="dropdown-menu dropdown-menu-right">
                                    <div class="dropdown-item-text dropdown-item-text--lh">
                                        <div><strong>Adrian Demian</strong></div>
                                        <div>@adriandemian</div>
                                    </div>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="index.html">Dashboard</a>
                                    <a class="dropdown-item" href="profile.html">My profile</a>
                                    <a class="dropdown-item" href="edit-account.html"
                                        >Edit account</a
                                    >
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="login.html">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- // END Header -->

        <!-- Header Layout Content -->
        <div class="mdk-header-layout__content">
            <div
                class="mdk-drawer-layout js-mdk-drawer-layout"
                data-push
                data-responsive-width="992px"
            >
                <div class="mdk-drawer-layout__content page">
                    <div class="container-fluid page__heading-container">
                        <div class="page__heading">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0">
                                    <li class="breadcrumb-item">
                                        <a href="#"><i class="material-icons icon-20pt">home</i></a>
                                    </li>
                                    <li class="breadcrumb-item">UI Components</li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Forms
                                    </li>
                                </ol>
                            </nav>

                            <h1 class="m-0">Forms</h1>
                        </div>
                    </div>

                    <div class="card card-form">
                        <div class="row no-gutters">
                            <div class="row no-gutters">
                                <div class="col-lg-8 card-form__body card-body">
                                    <form>
                                        <div class="was-validated">
                                            <div class="form-row">
                                                <div class="col-12 col-md-12 mb-3">
                                                    <label for="validationSample01"
                                                        >Nama Produk</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="validationSample01"
                                                        placeholder="Nama Produk"
                                                        value="Mark"
                                                        required=""
                                                    />
                                                    <div class="invalid-feedback">
                                                        Silahkan Lengkapi Nama Produk.
                                                    </div>
                                                    <div class="valid-feedback">Bagus!</div>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="col-12 col-md-12 mb-3">
                                                    <label for="validationSample04"
                                                        >Harga Produk</label
                                                    >
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="validationSample04"
                                                        placeholder="Harga Produk"
                                                        required=""
                                                    />
                                                    <div class="invalid-feedback">
                                                        Silahkan Lengkapi valid Harga Produk.
                                                    </div>
                                                    <div class="valid-feedback">Bagus!</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox">
                                                <input
                                                    class="custom-control-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="invalidCheck01"
                                                    required=""
                                                    checked=""
                                                />
                                                <label
                                                    class="custom-control-label"
                                                    for="invalidCheck01"
                                                >
                                                    Agree to terms and conditions
                                                </label>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary" type="submit">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                                <div class="col-lg-8 card-form__body card-body">
                                    <div class="form-group">
                                        <label for="flatpickrSample01">Date</label>
                                        <input
                                            id="flatpickrSample01"
                                            type="text"
                                            class="form-control"
                                            placeholder="Flatpickr example"
                                            data-toggle="flatpickr"
                                            value="today"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="flatpickrSample02">Range</label>
                                        <input
                                            id="flatpickrSample02"
                                            type="text"
                                            class="form-control"
                                            placeholder="Flatpickr range example"
                                            data-toggle="flatpickr"
                                            data-flatpickr-mode="range"
                                            value="2018-10-07 to 2018-10-15"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-8 card-form__body card-body">
                                    <div class="form-group">
                                        <label for="select01">Basic</label>
                                        <select
                                            id="select01"
                                            data-toggle="select"
                                            class="form-control"
                                        >
                                            <option selected="">My first option</option>
                                            <option>Another option</option>
                                            <option>Third option is here</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="select04">Large</label>
                                        <select
                                            id="select04"
                                            data-toggle="select"
                                            multiple
                                            class="form-control form-control-lg"
                                        >
                                            <option>CSS</option>
                                            <option>HTML</option>
                                            <option selected="">JavaScript</option>
                                            <option>Bootstrap</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-8 card-form__body card-body">
                                    <label>Custom toolbar</label>
                                    <div
                                        style="height: 150px"
                                        data-toggle="quill"
                                        data-quill-placeholder="Quill WYSIWYG editor"
                                        data-quill-modules-toolbar='[["bold", "italic"], ["link", "blockquote", "code", "image"], [{"list": "ordered"}, {"list": "bullet"}]]'
                                    >
                                        <p>Hello World!</p>
                                        <p>Some initial <strong>bold</strong> text</p>
                                        <p><br /></p>
                                    </div>
                                </div>
                                <div
                                    class="col-lg-8 card-form__body card-body d-flex align-items-center"
                                >
                                    <div
                                        class="dropzone dropzone-multiple w-100"
                                        data-toggle="dropzone"
                                        data-dropzone-multiple
                                        data-dropzone-url="http://"
                                        data-dropzone-files='["assets/images/avatar/blue.svg", "assets/images/avatar/demi.png", "assets/images/avatar/green.svg"]'
                                    >
                                        <div class="fallback">
                                            <div class="custom-file">
                                                <input
                                                    type="file"
                                                    class="custom-file-input"
                                                    id="customFileUploadMultiple"
                                                    multiple
                                                />
                                                <label
                                                    class="custom-file-label"
                                                    for="customFileUploadMultiple"
                                                    >Choose file</label
                                                >
                                            </div>
                                        </div>

                                        <ul
                                            class="dz-preview dz-preview-multiple list-group list-group-flush"
                                        >
                                            <li class="list-group-item">
                                                <div class="form-row align-items-center">
                                                    <div class="col-auto">
                                                        <div class="avatar">
                                                            <img
                                                                src="assets/images/avatar/blue.svg"
                                                                class="avatar-img rounded"
                                                                alt="..."
                                                                data-dz-thumbnail
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="font-weight-bold" data-dz-name>
                                                            ...
                                                        </div>
                                                        <p
                                                            class="small text-muted mb-0"
                                                            data-dz-size
                                                        >
                                                            ...
                                                        </p>
                                                    </div>
                                                    <div class="col-auto">
                                                        <a
                                                            href="#"
                                                            class="text-muted-light"
                                                            data-dz-remove
                                                        >
                                                            <i class="material-icons">close</i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- // END drawer-layout__content -->

                <div class="mdk-drawer js-mdk-drawer" id="default-drawer" data-align="start">
                    <div class="mdk-drawer__content">
                        <div class="sidebar sidebar-light sidebar-left simplebar" data-simplebar>
                            <div
                                class="d-flex align-items-center sidebar-p-a border-bottom sidebar-account"
                            >
                                <a
                                    href="profile.html"
                                    class="flex d-flex align-items-center text-underline-0 text-body"
                                >
                                    <span class="avatar mr-3">
                                        <img
                                            src="assets/images/avatar/demi.png"
                                            alt="avatar"
                                            class="avatar-img rounded-circle"
                                        />
                                    </span>
                                    <span class="flex d-flex flex-column">
                                        <strong>Adrian Demian</strong>
                                        <small class="text-muted text-uppercase"
                                            >Account Manager</small
                                        >
                                    </span>
                                </a>
                                <div class="dropdown ml-auto">
                                    <a
                                        href="#"
                                        data-toggle="dropdown"
                                        data-caret="false"
                                        class="text-muted"
                                        ><i class="material-icons">more_vert</i></a
                                    >
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <div class="dropdown-item-text dropdown-item-text--lh">
                                            <div><strong>Adrian Demian</strong></div>
                                            <div>@adriandemian</div>
                                        </div>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="index.html">Dashboard</a>
                                        <a class="dropdown-item" href="profile.html">My profile</a>
                                        <a class="dropdown-item" href="edit-account.html"
                                            >Edit account</a
                                        >
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="login.html">Logout</a>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar-heading sidebar-m-t">Menu</div>
                            <ul class="sidebar-menu">
                                <li class="sidebar-menu-item">
                                    <a
                                        class="sidebar-menu-button"
                                        data-toggle="collapse"
                                        href="#dashboards_menu"
                                    >
                                        <i
                                            class="sidebar-menu-icon sidebar-menu-icon--left material-icons"
                                            >dvr</i
                                        >
                                        <span class="sidebar-menu-text">Dashboards</span>
                                    </a>
                                    <ul class="sidebar-submenu collapse" id="dashboards_menu"></ul>
                                </li>
                            </ul>
                            <div class="sidebar-heading">UI Components</div>
                            <div class="sidebar-block p-0">
                                <ul class="sidebar-menu" id="components_menu">
                                    <li class="sidebar-menu-item">
                                        <a class="sidebar-menu-button" href="ui-buttons.html">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons"
                                                >mouse</i
                                            >
                                            <span class="sidebar-menu-text">Buttons</span>
                                        </a>
                                    </li>

                                    <li class="sidebar-menu-item">
                                        <a class="sidebar-menu-button" href="ui-tabs.html">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons"
                                                >tab</i
                                            >
                                            <span class="sidebar-menu-text">Tabs</span>
                                        </a>
                                    </li>
                                    <li class="sidebar-menu-item">
                                        <a class="sidebar-menu-button" href="ui-loaders.html">
                                            <i
                                                class="sidebar-menu-icon sidebar-menu-icon--left material-icons"
                                                >refresh</i
                                            >
                                            <span class="sidebar-menu-text">Loaders</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- // END drawer-layout -->
            </div>
            <!-- // END header-layout__content -->
        </div>
    </div>
    <!-- // END header-layout -->

    <!-- App Settings FAB -->
    <div id="app-settings">
        <app-settings
            layout-active="default"
            :layout-location="{
                default: 'ui-forms.html',
                fixed: 'fixed-ui-forms.html',
                fluid: 'fluid-ui-forms.html',
                mini: 'mini-ui-forms.html'
            }"
        ></app-settings>
    </div>
</template>
