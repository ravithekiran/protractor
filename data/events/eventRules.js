//default traits for all events
var default_traits = ["trait2","trait65","trait79","trait76","trait253"];

//event and specific traits mapping
var event_traits = {
"logo_click" : {
required_traits : []
},
"header_menu_click" : {
required_traits : ["trait62"]
},
"footer_menu_click" : {
required_traits : ["trait62"]
},
"join_talent_community_click" :{
required_traits : []
},
"recommended_job_see_more_click" : {
required_traits : []
},
"jtn_form_submit" : {
required_traits : ["form_step_data"]
},
"socialnetwork_menu_click" : {
required_traits : ["trait213"]
},
"page_search" : {
required_traits : ["trait6"]
},
"header_search" : {
required_traits : ["trait6"]
},
"home_page_view" : {
required_traits : []
},
"job-cart-icon-click" : {
required_traits : []
},
"type_ahead_search" : {
required_traits : ["trait59","trait60"]
},
"linkedin_login_click" : {
required_traits : []
},
"recommended_job_click" : {
required_traits : ["trait14","trait5"]
},

"recently_viewed_job_click" : {
required_traits : ["trait5","trait14"]
},
"view_all_glassdoor_reviews_click" : {
required_traits : []
},
"homepage_category_click" : {
required_traits : ["trait14"]
},
"favorites_page_view" : {
required_traits : []
},
"favorite_job_click" : {
required_traits : ["trait5","trait14"]
},
"job_add_to_favorite" : {
required_traits : ["trait5","trait14"]
},
"job_unfavorited" : {
required_traits : ["trait5","trait14"]
},
"job_category_page_view" : {
required_traits : ["trait14"]
},
"sort_by_click" : {
required_traits : ["trait61"]
},
"search_result_page_view" : {
required_traits : []
},
"refiner_search" : {
required_traits : ["trait6","trait47"]
},
"clear_searches_click" : {
required_traits : []
},
"pagination_click" : {
required_traits : ["trait214"]
},
"job_click" : {
required_traits : ["trait5","trait14"]
},
"job_details_view" : {
required_traits : ["trait5","trait14"]
},
"job_added_to_jobcart" : {
required_traits : ["trait5","trait14"]
},
"similar_jobs_subscribe" : {
required_traits : ["trait5","trait14","trait27"]
},
"Share_Facebook" : {
required_traits : ["trait5","trait14"]
},
"Share_LinkedIn" : {
required_traits : ["trait5","trait14"]
},
"Share_Twitter" : {
required_traits : ["trait5","trait14"]
},
"Share_Googleplus" : {
required_traits : ["trait5","trait14"]
},
"Share_Email" : {
required_traits : ["trait5","trait14"]
},
"similar_job_click" : {
required_traits : ["trait5","trait14","trait12"]
},
"email_job" : {
required_traits : ["trait5","trait15","trait27","trait14"]
},
"ats_apply_click" : {
required_traits : ["trait5","trait14"]
},
"apply_click" : {
required_traits : ["trait5","trait14"]
},
"quick_apply_email_popup_close_click" : {  // Need to discuss this
required_traits : ["trait5","trait14"]
},
"apply_email_submit_click" : {
required_traits : ["trait5","trait27"]
},
"back_to_search_results_click" : {
required_traits : []
},
"previous_job_click" : {
required_traits : ["trait5","trait14"]
},
"next_job_click" : {
required_traits : ["trait5","trait14"]
},
"recommendation_dot_slider_click" : {
required_traits : []
},
"recommendation_next_slider_click" : {
required_traits : []
},
"recommendation_previous_slider_click" : {
required_traits : []
},
"recently_viewed_jobs_previous_slider_click" : {
required_traits : ["trait5"]
},
"recently_viewed_jobs_next_slider_click" : {
required_traits : ["trait5"]
},
"recently_viewed_jobs_slider_dots_click" : {
required_traits : ["trait5"]
},
"static_more_info" : {
required_traits : ["trait13"]
},
"errorpage_category_click" : {
required_traits : ["trait14"]
},
"job_category_click" : {
required_traits : ["trait14"]
},
"job_category_search_click" : {
required_traits : ["trait14"]
},
"linkedin_profile_data" : {
required_traits : ["trait_liProfile"]
},
"linkedin_logout_click" : {
required_traits : []
},
"ats_apply_page_view" : {       // doubt
required_traits : ["trait5"]
},
"apply_page_view" : {
required_traits : ["trait5"]
},
"apply_step_submit" : {
required_traits : ["trait254","trait5","form_step_data","trair14"]
},
"apply_service_data" : {
required_traits : ["trait254","trait5","form_step_data","trair14","stepStatus"]
},
"apply_form_submit" : {
required_traits : ["trait254","trait5","form_step_data","trait14"]
},
"404_page_view" : {
required_traits : []
},
"apply_dropbox_resume_server_event_data" : {
required_traits : ["trait5","trait254","trait150"]
},
"back_to_top_button_click" : {
required_traits : []
},
"static_page_view" : {
required_traits : ["trait13"]
},
"category_click" : {
required_traits : ["trait14"]
},
"static_content_click" : {
required_traits : ["trait13"]
},
"career_alerts_popup_close_click" : {
required_traits : []
},
"career_alerts_click" : {
required_traits : []
},
"existing_applicants_login_click" : {
required_traits : []
},
"business_unit_category_click" :{
required_traits : ["trait14"]
},
"featured_category_click" : {
required_traits : ["trait14"]
},
"login_submit" : {
required_traits : ["trait27"]
},
"logout_click" : {
required_traits : []
},
"profile_click" : {
required_traits : []
},
"linkedin_recommended_job_click" : {
required_traits : ["trait5","trait14"]
},
"near_job_click" : {
required_traits : ["trait5","trait14"]
},
"apply_linkedin_click" : {
required_traits : ["trait5","trait14","trait254"]
},
"apply_dropbox_click" : {
required_traits : ["trait5","trait14","trait254"]
},
"apply_onedrive_click" : {
required_traits : ["trait5","trait14","trait254"]
},
"apply_googledrive_click" : {
required_traits : ["trait5","trait14","trait254"]
},
"apply_resumeupload_click" : {
required_traits : ["trait5","trait14","trait254"]
},
"apply_edit_click" : {
required_traits : ["trait255","trait254","trait5","trait14"]
},
"apply_resumeupload_resume_server_event_data" : {
required_traits : ["trait5","trait14","trait254"]
},
"apply_back_to_review_click" : {
required_traits : ["trait254","trait5","trait14"]
},
"apply_save_click" : {
required_traits : ["trait254","trait5","trait14"]
},
"apply_breadcrumb_click" : {
required_traits : ["trait255","trait254","trait5","trait14"]
},
"apply_back_click" : {
required_traits : ["trait254","trait5","trait14"]
},
"results_search" : {
required_traits : ["trait6"]
},
"jtc_dropbox_click" : {
required_traits : ["trait254","trait27"]
},
"jtc_dropbox_resume_server_event_data" : {
required_traits : ["trait254","trait27"]
},
"jtc_linkedin_click" : {
required_traits : ["trait254","trait27"]
},
"jtc_googledrive_click" : {
required_traits : ["trait254","trait27"]
},
"jtc_onedrive_click" : {
required_traits : ["trait254","trait27"]
},
"jtc_resumeupload_click" :{
required_traits : ["trait254","trait27"]
},
"jtc_resumeupload_resume_server_event_data" :{
required_traits : ["trait254","trait27"]
},
"jtc_service_data" : {
required_traits : ["trait254","trait27"]
},
"jtc_thankYou" : {
required_traits : ["trait254","trait27"]
},
"linkedin_recommended_category_click" : {
required_traits : ["trait14"]
},
"apply_thankyou" : {
required_traits : ["trait5","trait14","trait254","trait27"]
},
"goto_click" : {
required_traits : ["trait256"]
},
"jtc_page_view" : {
required_traits : []
}

}

//trait rules
var trait_rules = {

"trait2" : {
name : "refNum",
required : true,
messages : {
required : "refnum is missing"
}
},
"trait5" : {
name : "jobId",
required : true,
messages : {
required : "job id is missing",
}
},
"trait6" : {
name : "searchKeyWord",
required : true,
messages : {
required : "search keyword is missing",
}
},
"trait12" : {
name : "similarJobID",
required : true,
messages : {
required : "similar job id is missing",
}
},
"trait13" : {
name : "contentTitle",
required : true,
messages : {
required : "static content title is missing"
}
},
"trait14" : {
name : "category",
required : true,
messages : {
required : "job category is missing",
}
},
"trait15" : {
name : "userName",
required : true,
messages : {
required : "the user name is missing",
}
},
"trait27" : {
name : "emailId",
required : true,
messages : {
required : "email is missing",
}
},
"trait47" : {
name : "searchRefiner value",
required : true,
messages : {
required : "the search refiner is missing",
}
},
"trait59" : {
name : "typeAhead name",
required : true,
messages : {
required : "the type ahead name is missing",
}
},
"trait60" : {
name : "typeAhead value",
required : true,
messages : {
required : "the type ahead value is missing",
}
},
"trait61" : {
name : "sort by value",
required : true,
messages : {
required : "the sort by value is missing",
}
},
"trait62" : {
name : "menu name",
required : true,
messages : {
required : "menu name is missing",
}
},
"trait65" : {
name : "deviceType",
required : true,
default_values : ["desktop","mobile"],
messages : {
required : "device type is missing",
default_values : "device type should be desktop or mobile",
}
},
"trait76" : {
name : "pageType",
required : true,
messages : {
required : "pageType is missing"
}
},
"trait79" : {
name : "languageType",
required : true,
messages : {
required : "language is missing",
}
},
"trait150" : {
name : "jtnApplyServerData",
required : true,
default_values : true,
messages : {
required : "jtnApplyServerData is missing",
}
},
"trait213" : {
name : "social Icon name",
required : true,
messages : {
required : "social icon name is missing",
}
},
"trait214" : {
name : "pageNumber",
required : true,
messages : {
required : "pagination number is missing",
}
},
"trait253" : {
name : "cms pageType",
required : true,
messages : {
required : "cms pageType is missing",
}
},
"trait254" : {
name : "currentStepName",
required : true,
messages : {
required : "currentStepName is missing",
}
},
"trait255" : {
name : "currentStepName",
required : true,
messages : {
required : "currentStepName is missing"
}
},
"trait256" : {
name : "goTo page value",
required : true,
messages : {
required : "goTo page value is missing"
}
},
"trait_liProfile" : {
name : "profileInfo",
required : true,
messages : {
required : "linkedin profile data is missing",
}
},
"form_step_data" : {
name : "formInfo",
required : true,
messages : {
required : "form_step_data is missing",
}
}
}

//common attributes
var common_attr_rules = {
"uid" : {
required : true,
messages : {
required : "uid is missing",
}
},
"pt_session" : {
required : true,
messages : {
required : "pt_session is missing",
}
}

}