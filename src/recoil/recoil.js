import {atom, selector} from 'recoil'

export const tabsState = atom({
    key:'tabsState',
    default: [
        {
            title:'SSC Exams',
            imgUrl:'./images/ssc-exams.png',
        },
        {
            title:'Banking Exams',
            imgUrl:'./images/banking-exams.png'
        },
        {
            title:'Teaching Exams',
            imgUrl:'./images/teaching-exams.png'
        },
        {
            title:'Civil Services Exams',
            imgUrl:'./images/civil-services.png'
        },
        {
            title:'Railways Exams',
            imgUrl:'./images/railway.png'
        },
        {
            title:'Engineering Recruitment Exams',
            imgUrl:'./images/engineering.png'
        },
        {
            title:'Defence Exams',
            imgUrl:'./images/defence.png'
        },
        {
            title:'State Govt Exams',
            imgUrl:'./images/state-govt.png'
        },
        {
            title:'Police Exams',
            imgUrl:'./images/police.png'
        },
        {
            title:'Insurance Exams',
            imgUrl:'./images/insurance.png'
        },
        {
            title:'Nursing Exams',
            imgUrl:'./images/Nursing.png'
        },
        {
            title:'Other Govt. Exams',
            imgUrl:'./images/state-govt.png'
        },
        {
            title:'NRA CET',
            imgUrl:'./images/NRA.png'
        },
        {
            title:'MBA Entrance Exam',
            imgUrl:'./images/MBA.png'
        },
        {
            title:'CUET and UG Entrance',
            imgUrl:'./images/CUET.png'
        },
        {
            title:'Accounting and Commerce',
            imgUrl:'./images/accounting-and-commerce.png'
        }
    ]
})

export const tabsContentState = atom({
    key:'tabsContentState',
    default:[
        {
            title:'SSC Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'SSC test',   testAvailable:400 },

            ]
        },
        {
            title:'Banking Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Banking test',   testAvailable:230 },

            ]
        },
        {
            title:'Teaching Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Teaching test',   testAvailable:230 },

            ]
        },
        {
            title:'Civil Services Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Civil Services test',   testAvailable:230 },

            ]
        },
        {
            title:'Railways Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Railways test',   testAvailable:230 },

            ]
        },
        {
            title:'Engineering Recruitment Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Engineering test',   testAvailable:230 },

            ]
        },
        {
            title:'Defence Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Defence test',   testAvailable:230 },

            ]
        },
        {
            title:'State Govt Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'State test',   testAvailable:230 },

            ]
        },
        {
            title:'Police Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Police test',   testAvailable:230 },

            ]
        },
        {
            title:'Insurance Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Insurance test',   testAvailable:400 },

            ]
        },
        {
            title:'Nursing Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Nursing test',   testAvailable:230 },

            ]
        },
        {
            title:'Other Govt. Exams',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Govt. test',   testAvailable:230 },

            ]
        },
        {
            title:'NRA CET',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'NRA test',   testAvailable:230 },
            ]
        },
        {
            title:'MBA Entrance Exam',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBA test',   testAvailable:230 },

            ]
        },
        {
            title:'CUET and UG Entrance',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'MBCUET and UGA test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'CUET and UG test',   testAvailable:230 },

            ]
        },
        {
            title:'Accounting and Commerce',
            exams:[
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:100 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:5400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:200 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:340 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:60 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:3400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and CommerceA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:230 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and CommerceA test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:400 },
                { img:'/images/ssc_all_exams_img.png', examName:'Accounting and Commerce test',   testAvailable:230 },
            ]        }
    ]
})
