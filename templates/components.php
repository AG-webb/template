<!-- Page Css -->
<link rel="stylesheet" href="assets/css/pages/components.css">
<!-- ========================== -->


<div class="row">
    <div class="column sm-12">
        <div class="components">

            <!-- Switcher -->
            <div class="component">
                <h1 class="h1-font">"Active" Class Toggle Component</h1>
                <div class="component__wrap">
                    <h2 class="h2-font">Default</h2>
                    <div class="switcher">
                        <button class="btn btn_lg btn_test switcher__item active">
                            <span>Switcher 1</span>
                        </button>
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 2</span>
                        </button>
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 3</span>
                        </button>
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 4</span>
                        </button>
                    </div>
                </div>
                <div class="component__wrap">
                    <h2 class="h2-font">Multiple</h2>
                    <div class="switcher switcher_multiple">
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 1</span>
                        </button>
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 2</span>
                        </button>
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 3</span>
                        </button>
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 4</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Buttons -->
            <div class="component">
                <h1 class="h1-font">Button Sizes</h1>
                <div class="btns">
                    <button class="btn btn_test btn_sm">
                        <span>Buttton Sm</span>
                    </button>
                    <button class="btn btn_test btn_md">
                        <span>Buttton Md</span>
                    </button>
                    <button class="btn btn_test btn_lg">
                        <span>Buttton Lg</span>
                    </button>
                    <button class="btn btn_test btn_xl">
                        <span>Buttton Xl</span>
                    </button>
                </div>
            </div>

            <!-- Form Items -->
            <div class="component">
                <h1 class="h1-font">Form Items</h1>
                <form action="#" class="with-validation">
                    <div class="form-fields">
                        <div class="form-fields__item">
                            <div class="form-field form-field_sm">
                                <div class="form-field__label">Field Sm</div>
                                <div class="form-field__target form-field__target_prefix">
                                    <div class="form-field__icon">
                                        <i class="icon icon-arrow-left"></i>
                                    </div>
                                    <input type="text" name="firstName" class="form-field__input">
                                </div>
                            </div>
                        </div>
                        <div class="form-fields__item">
                            <div class="form-field form-field_md form-field_underline">
                                <div class="form-field__label">Field Md</div>
                                <div class="form-field__target">
                                    <input type="text" name="lastName" class="form-field__input">
                                </div>
                            </div>
                        </div>
                        <div class="form-fields__item">
                            <div class="form-field form-field_md form-field_legend">
                                <div class="form-field__label">Field Md Phone</div>
                                <div class="form-field__target form-field__target_prefix">
                                    <div class="form-field__icon">
                                        <i class="icon icon-arrow-left"></i>
                                    </div>
                                    <input type="number" name="phone" class="form-field__input">
                                </div>
                            </div>
                        </div>
                        <div class="form-fields__item">
                            <div class="form-field form-field_round form-field_lg">
                                <div class="form-field__label">Field Lg Email*</div>
                                <div class="form-field__target form-field__target_suffix">
                                    <div class="form-field__icon">
                                        <i class="icon icon-arrow-right"></i>
                                    </div>
                                    <input type="text" name="email" class="email-validation form-field__input">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-fields__item">
                        <div class="form-field form-field_textarea">
                            <div class="form-field__label">Textarea</div>
                            <div class="form-field__target">
                                <textarea name="message" class="form-field__input"></textarea>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn_md btn_test">
                        <span>submit</span>
                    </button>
                </form>
            </div>
            
            <!-- Shadows -->
            <div class="component">
                <h1 class="h1-font">Shadows List</h1>
    
                <div class="shadow-item shadow-xs h2-font">
                    Shadow Xs
                </div>
                <div class="shadow-item shadow-sm h2-font">
                    Shadow Sm
                </div>
                <div class="shadow-item shadow-md h2-font">
                    Shadow Md
                </div>
            </div>
    
            <!-- Toast -->
            <div class="component">
                <h1 class="h1-font">Display Toast Messages</h1>
                <button class="btn btn_lg btn_test toast-trigger">
                    <span>Display Toast</span>
                </button>
            </div>
    
            <!-- Select -->
            <div class="component">
                <!-- Single -->
                <h1 class="h1-font">Custom Select</h1>
                <div class="component__wrap">
                    <h2 class="h2-font">Single</h2>
                    <div class="custom-select">
                        <div class="combo-box" data-combo-name="select" data-combo-value="all">
                            <div class="combo-box-selected">
                                <span class="combo-box-placeholder">Select Placeholder</span>
                            </div>
                            <div class="combo-box-dropdown">
                                <div class="combo-box-options">
                                    <div class="combo-option selected" data-combo-value="all">
                                        <span>all</span>
                                    </div>
                                    <div class="combo-option" data-combo-value="1">
                                        <span>1</span>
                                    </div>
                                    <div class="combo-option" data-combo-value="2">
                                        <span>2</span>
                                    </div>
                                    <div class="combo-option" data-combo-value="3">
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="component__wrap">
                    <!-- Multiple -->
                    <h2 class="h2-font">Multiple</h2>
                    <div class="custom-select">
                        <div class="combo-box multiple" data-combo-name="multiselect">
                            <div class="combo-box-selected">
                                <span class="combo-box-placeholder">Multiple Select Placeholder</span>          
                            </div>
                            <div class="combo-box-dropdown">
                                <div class="combo-box-options">
                                    <div class="combo-option" data-combo-value="1">Item 1</div>
                                    <div class="combo-option" data-combo-value="2">Item 2</div>
                                    <div class="combo-option" data-combo-value="3">Item 3</div>
                                    <div class="combo-option" data-combo-value="4">Item 4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="component__wrap">
                    <!-- Multiple With Search -->
                    <h2 class="h2-font">Multiple With Search</h2>
                    <div class="custom-select">
                        <div class="combo-box multiple searchable" data-combo-name="multiselect">
                            <div class="combo-box-selected">
                                <span class="combo-box-placeholder">Multiple Select Placeholder</span>          
                            </div>
                            <div class="combo-box-dropdown">
                                <div class="combo-box-search">
                                    <input type="text" placeholder="Find option">
                                </div>
                                <div class="combo-box-options">
                                    <div class="combo-option" data-combo-value="1">Bmw</div>
                                    <div class="combo-option" data-combo-value="2">Mercedes</div>
                                    <div class="combo-option" data-combo-value="3">Volvo</div>
                                    <div class="combo-option" data-combo-value="4">Wolksvagen</div>
                                    <div class="combo-option" data-combo-value="5">Opel</div>
                                    <div class="combo-option" data-combo-value="6">Nissan</div>
                                    <div class="combo-option" data-combo-value="7">Toyota</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- Accordion -->
            <div class="component">
                <h1 class="h1-font">Accordion</h1>
                <div class="accordion">
                    <div class="accordion__item">
                        <div class="accordion__header">
                            <div class="accordion__title">
                                Accordion Item 1
                            </div>
                            <div class="accordion__arrow">
                                <i class="icon icon-chevron-down"></i>
                            </div>
                        </div>
                        <div class="accordion__body" style="display: none;">
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                                quidem quos culpa nulla consequatur doloremque! Animi labore ullam
                                sequi ipsam error, soluta nam unde voluptate ex, vero architecto ipsa quisquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                                quidem quos culpa nulla consequatur doloremque! Animi labore ullam
                                sequi ipsam error, soluta nam unde voluptate ex, vero architecto ipsa quisquam.
                            </div>
                        </div>
                    </div>
                    <div class="accordion__item">
                        <div class="accordion__header">
                            <div class="accordion__title">
                                Accordion Item 2
                            </div>
                            <div class="accordion__arrow">
                                <i class="icon icon-chevron-down"></i>
                            </div>
                        </div>
                        <div class="accordion__body" style="display: none;">
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                                quidem quos culpa nulla consequatur doloremque! Animi labore ullam
                                sequi ipsam error, soluta nam unde voluptate ex, vero architecto ipsa quisquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                                quidem quos culpa nulla consequatur doloremque! Animi labore ullam
                                sequi ipsam error, soluta nam unde voluptate ex, vero architecto ipsa quisquam.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- Modal -->
            <div class="component">
                <h1 class="h1-font">Modal. Possible classes - "from-left", "from-right", "center-modal", "error", "success"</h1>
                <button class="btn btn_lg btn_test modal-trigger" data-modal="main-modal">
                    <span>Open Modal</span>
                </button>
            </div>

            <!-- Tabs -->
            <div class="component">
                <h1 class="h1-font">Tabs</h1>
                <div class="tabs">
                    <div class="tabs__control">
                        <button class="tab btn btn_sm btn_test active" data-tab="tab-1">
                            <span>Tab 1</span>
                        </button>
                        <button class="tab btn btn_sm btn_test" data-tab="tab-2">
                            <span>Tab 2</span>
                        </button>
                        <button class="tab btn btn_sm btn_test" data-tab="tab-3">
                            <span>Tab 3</span>
                        </button>
                    </div>
                    <div class="tabs__content">
                        <div id="tab-1" class="tab-content active">
                            1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi laboriosam perferendis minima? Nihil optio tenetur quidem quibusdam amet est corporis, voluptatum saepe laudantium harum, explicabo in sit quam delectus placeat?
                        </div>
                        <div id="tab-2" class="tab-content">
                            2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi laboriosam perferendis minima? Nihil optio tenetur quidem quibusdam amet est corporis, voluptatum saepe laudantium harum, explicabo in sit quam delectus placeat?
                        </div>
                        <div id="tab-3" class="tab-content">
                            3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi laboriosam perferendis minima? Nihil optio tenetur quidem quibusdam amet est corporis, voluptatum saepe laudantium harum, explicabo in sit quam delectus placeat?
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dinamic Append -->
            <div class="component">
                <h1 class="h1-font">Dinamic Append (resize window less than 1280px and reload page for result)</h1>
                <div class="desktop-append-container">
                    <span>When window width >= 1280px</span>
                    <button class="append-button btn btn_sm btn_test" data-append="1280, .tablet-append-container">
                        <span>Append Element</span>
                    </button>
                </div>
                <div class="tablet-append-container">
                    <span>When window width < 1280px</span>
                </div>
            </div>

            <!-- Skeleton -->
            <div class="component">
                <h1 class="h1-font">Skeleton</h1>
                <div class="skeleton">
                    <div class="skeleton__element skeleton__element_image"></div>
                    <div class="skeleton__element skeleton__element_avatar"></div>
                    <div class="skeleton__element skeleton__element_title"></div>
                    <div class="skeleton__element skeleton__element_text"></div>
                    <div class="skeleton__element skeleton__element_text"></div>
                    <div class="skeleton__element skeleton__element_text"></div>
                    <div class="skeleton__element skeleton__element_text"></div>
                </div>
            </div>
        </div>

    </div>
</div>
</div>


<!-- Modal -->
<div class="modal main-modal modal_md from-left">
    <div class="modal__wrapper">
        <div class="modal__body">
            <div class="modal__close modal-close">
                <img src="assets/img/icons/close.svg" alt="close">
            </div>
            <!-- Content -->
            <div class="modal__content">
                <div class="row expanded">
                    <div class="column sm-12">
                        <div class="modal__title h1-font">Modal test</div>
                        <span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                        </span>
                    </div>
                </div>
            </div>

            <!-- Success Message -->
            <div class="modal__success success-message">
                <div class="row expanded">
                    <div class="column sm-12">
                        Success Message
                    </div>
                </div>
            </div>
            <!-- Error Message -->
            <div class="modal__error error-message">
                <div class="row expanded">
                    <div class="column sm-12">
                        Error Message
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>