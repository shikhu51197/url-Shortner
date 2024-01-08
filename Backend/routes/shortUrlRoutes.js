import express from "express";

import { shortenUrl, redirectUrl } from "../controllers/shortUrlController.js";
import { authenticateUser } from "./../middleware/authmiddle.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    ShortUrl:
 *      type: object
 *      required:
 *        - originalUrl
 *        - hashedUrl
 *      properties:
 *        id:
 *          type: string
 *          description: The Auto-generated id of user collection
 *          example : DHSASDHJDJHVAJDSVJAVSD
 *        originalUrl:
 *          type: string
 *          description: originalUrl
 *        hashedUrl:
 *          type: string
 *          description: hashedUrl
 *      example:
 *        id: GDHJGD788BJBJ
 *        originalUrl: https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
 */

/**
 *  @swagger
 *  tags:
 *    name: ShortUrl
 *    description: UrlShorter apis
 */

/**
 * @swagger
 * /api/shorten:
 *    post:
 *      summary: Url shorten  Page
 *      tags: [ShortUrl]
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ShortUrl'
 *      responses:
 *        200:
 *          description: url Shorten successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ShortUrl'
 *        500:
 *          description: internal serevr error
 */
/**
 * @swagger
 * /api/:hash:
 *  get:
 *    summary: Get redirectUrl 
 *    tags: [ShortUrl]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ShortUrl'
 *    responses:
 *      200:
 *        description: Receive Url successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ShortUrl'
 *      500:
 *        description: something went wrong
 */

router.post("/shorten", shortenUrl, authenticateUser);
router.get("/:hash", redirectUrl);
export default router;
