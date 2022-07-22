import cloudbase from '@cloudbase/js-sdk';
const app = cloudbase.init({
    env: "fuildroom-4gh9p27od95e1876",
});
const db = app.database();
const _ = db.command;
//研究所简介
export const reqIntrduceDate = async () => db.collection("Introduce").get()
//就业情况数据
export const reqEmploymentStatusData = async (e, str) => {
    if (str === "first") {
        let r1 = await db.collection("employmentStatus")
            .limit(e)
            .get()
        let r2 = await db.collection("employmentStatus")
            .count()
        return {
            data: r1.data,
            total: r2.total
        }
    } else {
        let r1 = await db.collection("allPaper")
            .limit(e)
            .skip(str)
            .get()
        return {
            data: r1.data,
        }
    }
}
//book组件数据
export const reqBookData = async (e, str) => {
    if (str === "first") {
        let r1 = await db.collection("allPaper")
            .limit(e)
            .get()

        let r2 = await db.collection("allPaper")
            .count()
        return {
            data: r1.data,
            total: r2.total
        }
    } else {
        let r1 = await db.collection("allPaper")
            .limit(e)
            .skip(str)
            .get()

        return {
            data: r1.data,
        }
    }
}
//patent组件数据
export const reqPatentData = async (e, str) => {
    if (str === "first") {
        let r1 = await db.collection("allPaper")
            .limit(e)
            .get()
        let r2 = await db.collection("allPaper")
            .count()
        return {
            data: r1.data,
            total: r2.total
        }
    } else {
        let r1 = await db.collection("allPaper")
            .limit(e)
            .skip(str)
            .get()
        return {
            data: r1.data,
        }
    }
}
//newsPages组件数据
export const reqNewsPageData = async (e, str) => {
    if (str === "first") {
        let r1 = await db.collection("newsPage")
            .limit(e)
            .get()
        let r2 = await db.collection("newsPage")
            .count()
        return {
            data: r1.data,
            total: r2.total
        }
    } else {
        let r1 = await db.collection("newsPage")
            .limit(e)
            .skip(str)
            .get()
        return {
            data: r1.data,
        }
    }
}

//newsDetail
export const reqNewsDetailData = async (e) => {
    let r1 = await db.collection("newsPage")
    .where({
        _id: _.eq(e)
      })
    .get()
    return {
        data: r1.data
    }
}

//JournalPaper组件数据
export const reqJournalPaperData = async (e, str) => {
    if (str === "first") {
        let r1 = await db.collection("allPaper")
            .limit(e)
            .get()
        let r2 = await db.collection("allPaper")
            .count()
        return {
            data: r1.data,
            total: r2.total
        }
    } else {
        let r1 = await db.collection("allPaper")
            .limit(e)
            .skip(str)
            .get()
        return {
            data: r1.data,
        }
    }
}


//mentorLis组件数据
export const reqTeacherAvatarData = async () => {
        let r1 = await db.collection("teacherAvatar").get()
        return {
            data: r1.data,
        }
}


//mentorDetail组件数据
export const reqMentorDetailData = async (e) => {
    let r1 = await db.collection("teacherAvatar")
    .where({
        _id: _.eq(e)
      })
    .get()
    return {
        data: r1.data
    }
}

//studentList
export const reqStudentListData = async (e, str) => {
    if (str === "first") {
        let r1 = await db.collection("studentList")
            .limit(e)
            .get()
        let r2 = await db.collection("studentList")
            .count()
        return {
            data: r1.data,
            total: r2.total
        }
    } else {
        let r1 = await db.collection("studentList")
            .limit(e)
            .skip(str)
            .get()
        return {
            data: r1.data,
        }
    }
}

