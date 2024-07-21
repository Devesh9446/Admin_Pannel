import {Router} from 'express'
import{getCurrentUser, getUserChannelProfile, getWatchHistory, registerUser, updatAccountDetails, updateCoverImage, updateUserAvatar} from "../controllers/user.controller.js"
import{logInUser} from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"

const router =Router()

router.route("/register").post(
    upload.fields([
        {
            name:"",
            maxCount:1
        },
        {
            name:"",
            maxCount:1
        }
    ])
,registerUser)

router.route("/logInUser").post(logInUser)
router.route("/change-password").post(verifyJwt,changeCurrentPassword)

export default router