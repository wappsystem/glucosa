(function(){
    var modules={
        "panel-main":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child":              {url:"$H/m/panel-child.html"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"participant-glucosa",form_module:"participant-form",router:1,
                                                child_panel:"panel-child",
                                                questionnaire_setup:"online-questionnaire-setup",
                                                online_questionnaire:"online-questionnaire-app",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                                                participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB"
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"participant-glucosa"},

        "online-questionnaire-setup":       {url:"$H/m/oq-setup.html",Table:"participant-glucosa"},
        "online-questionnaire-app":         {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"notes-glucosa",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"notes-glucosa"},

        "randomisation-table-data-glucosa":		{url:"$H/m/library/randomisation-table-data.html",Table:"randomisation-table-glucosa",form_module:"randomisation-table-form-glucosa"},
        "randomisation-table-form-glucosa":		{url:"$H/m/library/randomisation-table-form.html",Table:"randomisation-table-glucosa"},

        "adverse-event-data-glucosa":             {url:"$H/m/library/adverse-event-data.html",Table:"adverse-event-glucosa",form_module:"adverse-event-form-glucosa",task_name:"Adverse Event"},
        "adverse-event-form-glucosa":             {url:"$H/m/library/adverse-event-form.html",Table:"adverse-event-glucosa",task_name:"Adverse Event"},
        "serious-adverse-event-data-glucosa":             {url:"$H/m/library/serious-adverse-event-data.html",Table:"serious-adverse-event-glucosa",form_module:"serious-adverse-event-form-glucosa",task_name:"Serious Adverse Event"},
        "serious-adverse-event-form-glucosa":             {url:"$H/m/library/serious-adverse-event-form.html",Table:"serious-adverse-event-glucosa",task_name:"Serious Adverse Event"},
        "serious-adverse-event-fu-data-glucosa":             {url:"$H/m/library/serious-adverse-event-follow-up-data.html",Table:"serious-adverse-event-fu-glucosa",form_module:"serious-adverse-event-fu-form-glucosa",task_name:"Serious Adverse Event Follow-up"},
        "serious-adverse-event-fu-form-glucosa":             {url:"$H/m/library/serious-adverse-event-follow-up-form.html",Table:"serious-adverse-event-fu-glucosa",task_name:"Serious Adverse Event Follow-up"},
        "file-notes-data-glucosa":                {url:"$H/m/library/file-notes-data.html",Table:"file-notes-glucosa",form_module:"file-notes-form-glucosa",task_name:"File Notes"},
        "file-notes-form-glucosa":                {url:"$H/m/library/file-notes-form.html",Table:"file-notes-glucosa",task_name:"File Notes"},
        "protocol-amendments-data-glucosa":       {url:"$H/m/library/upload-file-data.html",Table:"protocol-amendments-glucosa",form_module:"protocol-amendments-form-glucosa",task_name:"Protocol Amendments"},
        "protocol-amendments-form-glucosa":       {url:"$H/m/library/upload-file-form.html",Table:"protocol-amendments-glucosa",task_name:"Protocol Amendments"},
        
        "diabetes-screen-data-glucosa":              {url:"$H/m/library/diabetes-screen-data.html",Table:"diabetes-screen-glucosa",form_module:"diabetes-screen-form-glucosa",task_name:"Pre-Screening - Diabetes Screen"},
        "diabetes-screen-form-glucosa":              {url:"$H/m/library/diabetes-screen-form.html",Table:"diabetes-screen-glucosa",task_name:"Pre-Screening - Diabetes Screen"},
        "inclusion-exclusion-data-glucosa":              {url:"$H/m/library/inclusion-exclusion-data.html",Table:"inclusion-exclusion-glucosa",form_module:"inclusion-exclusion-form-glucosa",task_name:"Pre-Screening - Inclusion/Exclusion Criteria"},
        "inclusion-exclusion-form-glucosa":              {url:"$H/m/library/inclusion-exclusion-form.html",Table:"inclusion-exclusion-glucosa",task_name:"Pre-Screening - Inclusion/Exclusion Criteria"},

        "v1-visit-date-data-glucosa":              {url:"$H/m/library/date-data.html",Table:"v1-visit-date-glucosa",form_module:"v1-visit-date-form-glucosa",task_name:"Visit 1 - Visit Date"},
        "v1-visit-date-form-glucosa":              {url:"$H/m/library/date-form.html",Table:"v1-visit-date-glucosa",task_name:"Visit 1 - Visit Date"},
        "v1-consent-data-glucosa":                    {url:"$H/m/library/consent-data.html",Table:"v1-consent-glucosa",form_module:"v1-consent-form-glucosa",task_name:"Visit 1 - Digital consent"},
        "v1-consent-form-glucosa":                    {url:"$H/m/library/consent-form.html",Table:"v1-consent-glucosa",task_name:"Visit 1 - Digital consent"},
        "v1-medical-history-data-glucosa":                    {url:"$H/m/library/medical-history-data.html",Table:"v1-medical-history-glucosa",form_module:"v1-medical-history-form-glucosa",task_name:"Visit 1 - Medical history"},
        "v1-medical-history-form-glucosa":                    {url:"$H/m/library/medical-history-form.html",Table:"v1-medical-history-glucosa",task_name:"Visit 1 - Medical history"},
        "v1-medications-data-glucosa":                    {url:"$H/m/library/medications-data.html",Table:"v1-medications-glucosa",form_module:"v1-medications-form-glucosa",task_name:"Visit 1 - Medications"},
        "v1-medications-form-glucosa":                    {url:"$H/m/library/medications-form.html",Table:"v1-medications-glucosa",task_name:"Visit 1 - Medications"},
        "v1-cpap-upload-data-glucosa":                    {url:"$H/m/library/upload-file-data.html",Table:"v1-cpap-upload-glucosa",form_module:"v1-cpap-upload-form-glucosa",task_name:"Visit 1 - CPAP file upload Background"},
        "v1-cpap-upload-form-glucosa":                    {url:"$H/m/library/upload-file-form.html",Table:"v1-cpap-upload-glucosa",task_name:"Visit 1 - CPAP file upload Background"},
        "v1-anthropometry-data-glucosa":           {url:"$H/m/library/anthropometry-data.html",Table:"v1-anthropometry-glucosa",form_module:"v1-anthropometry-form-glucosa",task_name:"Visit 1 - Anthropometry"},
        "v1-anthropometry-form-glucosa":           {url:"$H/m/library/anthropometry-form.html",Table:"v1-anthropometry-glucosa",task_name:"Visit 1 - Anthropometry"},
        "v1-ess-data-glucosa":                    {url:"$H/m/library/ess-data.html",Table:"v1-ess-glucosa",form_module:"v1-ess-form-glucosa",task_name:"Visit 1 - ESS"},
        "v1-ess-form-glucosa":                    {url:"$H/m/library/ess-form.html",Table:"v1-ess-glucosa",task_name:"Visit 1 - ESS"},
        "v1-psqi-data-glucosa":                    {url:"$H/m/library/psqi-data.html",Table:"v1-psqi-glucosa",form_module:"v1-psqi-form-glucosa",task_name:"Visit 1 - PSQI"},
        "v1-psqi-form-glucosa":                    {url:"$H/m/library/psqi-form.html",Table:"v1-psqi-glucosa",task_name:"Visit 1 - PSQI"},
        "v1-ethnicity-data-glucosa":                    {url:"$H/m/library/ethnicity-data.html",Table:"v1-ethnicity-glucosa",form_module:"v1-ethnicity-form-glucosa",task_name:"Visit 1 - Ethnicity"},
        "v1-ethnicity-form-glucosa":                    {url:"$H/m/library/ethnicity-form.html",Table:"v1-ethnicity-glucosa",task_name:"Visit 1 - Ethnicity"},
        "v1-lifestyle-data-glucosa":                    {url:"$H/m/library/lifestyle-data.html",Table:"v1-lifestyle-glucosa",form_module:"v1-lifestyle-form-glucosa",task_name:"Visit 1 - Lifestyle"},
        "v1-lifestyle-form-glucosa":                    {url:"$H/m/library/lifestyle-form.html",Table:"v1-lifestyle-glucosa",task_name:"Visit 1 - Lifestyle"},
        "v1-education-data-glucosa":                    {url:"$H/m/library/education-data.html",Table:"v1-education-glucosa",form_module:"v1-education-form-glucosa",task_name:"Visit 1 - Education"},
        "v1-education-form-glucosa":                    {url:"$H/m/library/education-form.html",Table:"v1-education-glucosa",task_name:"Visit 1 - Education"},

        "v2-visit-date-data-glucosa":              {url:"$H/m/library/date-data.html",Table:"v2-visit-date-glucosa",form_module:"v2-visit-date-form-glucosa",task_name:"Visit 2 - Visit Date"},
        "v2-visit-date-form-glucosa":              {url:"$H/m/library/date-form.html",Table:"v2-visit-date-glucosa",task_name:"Visit 2 - Visit Date"},
        "v2-concom-med-data-glucosa":                    {url:"$H/m/library/concom-medication-data.html",Table:"v2-concom-med-glucosa",form_module:"v2-concom-med-form-glucosa",task_name:"Visit 2 - Concomitant Medication"},
        "v2-concom-med-form-glucosa":                    {url:"$H/m/library/concom-medication-form.html",Table:"v2-concom-med-glucosa",task_name:"Visit 2 - Concomitant Medication"},
        "v2-ess-data-glucosa":                    {url:"$H/m/library/ess-data.html",Table:"v2-ess-glucosa",form_module:"v2-ess-form-glucosa",task_name:"Visit 2 - ESS"},
        "v2-ess-form-glucosa":                    {url:"$H/m/library/ess-form.html",Table:"v2-ess-glucosa",task_name:"Visit 2 - ESS"},
        "v2-psqi-data-glucosa":                    {url:"$H/m/library/psqi-data.html",Table:"v2-psqi-glucosa",form_module:"v2-psqi-form-glucosa",task_name:"Visit 2 - PSQI"},
        "v2-psqi-form-glucosa":                    {url:"$H/m/library/psqi-form.html",Table:"v2-psqi-glucosa",task_name:"Visit 2 - PSQI"},
        "v2-anthropometry-data-glucosa":           {url:"$H/m/library/anthropometry-data.html",Table:"v2-anthropometry-glucosa",form_module:"v2-anthropometry-form-glucosa",task_name:"Visit 2 - Anthropometry"},
        "v2-anthropometry-form-glucosa":           {url:"$H/m/library/anthropometry-form.html",Table:"v2-anthropometry-glucosa",task_name:"Visit 2 - Anthropometry"},
        "v2-cpap-upload-data-glucosa":                    {url:"$H/m/library/upload-file-data.html",Table:"v2-cpap-upload-glucosa",form_module:"v2-cpap-upload-form-glucosa",task_name:"Visit 2 - CPAP file upload Background"},
        "v2-cpap-upload-form-glucosa":                    {url:"$H/m/library/upload-file-form.html",Table:"v2-cpap-upload-glucosa",task_name:"Visit 2 -CPAP file upload Background"},
        "v2-cpap-sd-long-data-glucosa":                    {url:"$H/m/library/cpap-sd-long-data.html",Table:"v2-cpap-sd-long-glucosa",form_module:"v2-cpap-sd-long-form-glucosa",task_name:"Visit 2 - CPAP SD Long"},
        "v2-cpap-sd-long-form-glucosa":                    {url:"$H/m/library/cpap-sd-long-form.html",Table:"v2-cpap-sd-long-glucosa",task_name:"Visit 2 - CPAP SD Long"},

        "v3-visit-date-data-glucosa":              {url:"$H/m/library/date-data.html",Table:"v3-visit-date-glucosa",form_module:"v3-visit-date-form-glucosa",task_name:"Visit 3 - Visit Date"},
        "v3-visit-date-form-glucosa":              {url:"$H/m/library/date-form.html",Table:"v3-visit-date-glucosa",task_name:"Visit 3 - Visit Date"},
        "v3-concom-med-data-glucosa":                    {url:"$H/m/library/concom-medication-data.html",Table:"v3-concom-med-glucosa",form_module:"v3-concom-med-form-glucosa",task_name:"Visit 3 - Concomitant Medication"},
        "v3-concom-med-form-glucosa":                    {url:"$H/m/library/concom-medication-form.html",Table:"v3-concom-med-glucosa",task_name:"Visit 3 - Concomitant Medication"},
        "v3-ess-data-glucosa":                    {url:"$H/m/library/ess-data.html",Table:"v3-ess-glucosa",form_module:"v3-ess-form-glucosa",task_name:"Visit 3 - ESS"},
        "v3-ess-form-glucosa":                    {url:"$H/m/library/ess-form.html",Table:"v3-ess-glucosa",task_name:"Visit 3 - ESS"},
        "v3-psqi-data-glucosa":                    {url:"$H/m/library/psqi-data.html",Table:"v3-psqi-glucosa",form_module:"v3-psqi-form-glucosa",task_name:"Visit 3 - PSQI"},
        "v3-psqi-form-glucosa":                    {url:"$H/m/library/psqi-form.html",Table:"v3-psqi-glucosa",task_name:"Visit 3 - PSQI"},
        "v3-anthropometry-data-glucosa":           {url:"$H/m/library/anthropometry-data.html",Table:"v3-anthropometry-glucosa",form_module:"v3-anthropometry-form-glucosa",task_name:"Visit 3 - Anthropometry"},
        "v3-anthropometry-form-glucosa":           {url:"$H/m/library/anthropometry-form.html",Table:"v3-anthropometry-glucosa",task_name:"Visit 3 - Anthropometry"},
        "v3-cpap-upload-data-glucosa":                    {url:"$H/m/library/upload-file-data.html",Table:"v3-cpap-upload-glucosa",form_module:"v3-cpap-upload-form-glucosa",task_name:"Visit 3 - CPAP file upload Background"},
        "v3-cpap-upload-form-glucosa":                    {url:"$H/m/library/upload-file-form.html",Table:"v3-cpap-upload-glucosa",task_name:"Visit 3 -CPAP file upload Background"},
        "v3-cpap-sd-long-data-glucosa":                    {url:"$H/m/library/cpap-sd-long-data.html",Table:"v3-cpap-sd-long-glucosa",form_module:"v3-cpap-sd-long-form-glucosa",task_name:"Visit 3 - CPAP SD Long"},
        "v3-cpap-sd-long-form-glucosa":                    {url:"$H/m/library/cpap-sd-long-form.html",Table:"v3-cpap-sd-long-glucosa",task_name:"Visit 3 - CPAP SD Long"},
        "v3-ogtt-data-glucosa":           {url:"$H/m/library/ogtt-data.html",Table:"v3-ogtt-glucosa",form_module:"v3-ogtt-form-glucosa",task_name:"Visit 3 - OGTT"},
        "v3-ogtt-form-glucosa":           {url:"$H/m/library/ogtt-form.html",Table:"v3-ogtt-glucosa",task_name:"Visit 3 - OGTT"},
        "v3-libre-pro-data-glucosa":           {url:"$H/m/library/libre-pro-data.html",Table:"v3-libre-pro-glucosa",form_module:"v3-libre-pro-form-glucosa",task_name:"Visit 3 - Libre Pro file upload"},
        "v3-libre-pro-form-glucosa":           {url:"$H/m/library/libre-pro-form.html",Table:"v3-libre-pro-glucosa",task_name:"Visit 3 - Libre Pro file upload"},
        "v3-withings-data-glucosa":           {url:"$H/m/library/withings-data.html",Table:"v3-withings-glucosa",form_module:"v3-withings-form-glucosa",task_name:"Visit 3 - Withings file upload"},
        "v3-withings-form-glucosa":           {url:"$H/m/library/withings-form.html",Table:"v3-withings-glucosa",task_name:"Visit 3 - Withings file upload"},

        "v4-visit-date-data-glucosa":              {url:"$H/m/library/date-data.html",Table:"v4-visit-date-glucosa",form_module:"v4-visit-date-form-glucosa",task_name:"Visit 4 - Visit Date"},
        "v4-visit-date-form-glucosa":              {url:"$H/m/library/date-form.html",Table:"v4-visit-date-glucosa",task_name:"Visit 4 - Visit Date"},
        "v4-concom-med-data-glucosa":                    {url:"$H/m/library/concom-medication-data.html",Table:"v4-concom-med-glucosa",form_module:"v4-concom-med-form-glucosa",task_name:"Visit 4 - Concomitant Medication"},
        "v4-concom-med-form-glucosa":                    {url:"$H/m/library/concom-medication-form.html",Table:"v4-concom-med-glucosa",task_name:"Visit 4 - Concomitant Medication"},
        "v4-ess-data-glucosa":                    {url:"$H/m/library/ess-data.html",Table:"v4-ess-glucosa",form_module:"v4-ess-form-glucosa",task_name:"Visit 4 - ESS"},
        "v4-ess-form-glucosa":                    {url:"$H/m/library/ess-form.html",Table:"v4-ess-glucosa",task_name:"Visit 4 - ESS"},
        "v4-psqi-data-glucosa":                    {url:"$H/m/library/psqi-data.html",Table:"v4-psqi-glucosa",form_module:"v4-psqi-form-glucosa",task_name:"Visit 4 - PSQI"},
        "v4-psqi-form-glucosa":                    {url:"$H/m/library/psqi-form.html",Table:"v4-psqi-glucosa",task_name:"Visit 4 - PSQI"},
        "v4-anthropometry-data-glucosa":           {url:"$H/m/library/anthropometry-data.html",Table:"v4-anthropometry-glucosa",form_module:"v4-anthropometry-form-glucosa",task_name:"Visit 4 - Anthropometry"},
        "v4-anthropometry-form-glucosa":           {url:"$H/m/library/anthropometry-form.html",Table:"v4-anthropometry-glucosa",task_name:"Visit 4 - Anthropometry"},
        "v4-cpap-upload-data-glucosa":                    {url:"$H/m/library/upload-file-data.html",Table:"v4-cpap-upload-glucosa",form_module:"v4-cpap-upload-form-glucosa",task_name:"Visit 4 - CPAP file upload Background"},
        "v4-cpap-upload-form-glucosa":                    {url:"$H/m/library/upload-file-form.html",Table:"v4-cpap-upload-glucosa",task_name:"Visit 4 -CPAP file upload Background"},
        "v4-cpap-sd-long-data-glucosa":                    {url:"$H/m/library/cpap-sd-long-data.html",Table:"v4-cpap-sd-long-glucosa",form_module:"v4-cpap-sd-long-form-glucosa",task_name:"Visit 4 - CPAP SD Long"},
        "v4-cpap-sd-long-form-glucosa":                    {url:"$H/m/library/cpap-sd-long-form.html",Table:"v4-cpap-sd-long-glucosa",task_name:"Visit 4 - CPAP SD Long"},
        "v4-ogtt-data-glucosa":           {url:"$H/m/library/ogtt-data.html",Table:"v4-ogtt-glucosa",form_module:"v4-ogtt-form-glucosa",task_name:"Visit 4 - OGTT"},
        "v4-ogtt-form-glucosa":           {url:"$H/m/library/ogtt-form.html",Table:"v4-ogtt-glucosa",task_name:"Visit 4 - OGTT"},
        "v4-libre-pro-data-glucosa":           {url:"$H/m/library/libre-pro-data.html",Table:"v4-libre-pro-glucosa",form_module:"v4-libre-pro-form-glucosa",task_name:"Visit 4 - Libre Pro file upload"},
        "v4-libre-pro-form-glucosa":           {url:"$H/m/library/libre-pro-form.html",Table:"v4-libre-pro-glucosa",task_name:"Visit 4 - Libre Pro file upload"},
        "v4-withings-data-glucosa":           {url:"$H/m/library/withings-data.html",Table:"v4-withings-glucosa",form_module:"v4-withings-form-glucosa",task_name:"Visit 4 - Withings file upload"},
        "v4-withings-form-glucosa":           {url:"$H/m/library/withings-form.html",Table:"v4-withings-glucosa",task_name:"Visit 4 - Withings file upload"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
})();
