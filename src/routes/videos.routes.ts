import {Router} from 'express';
import { VideoRepository } from '../modules/videos/repositories/VideoRepository';

const videosRoutes = Router();
const videoRepository = new VideoRepository();

videosRoutes .post('/create-video', (request, response) => {
  videoRepository.create(request, response);
})

videosRoutes .get('/get-videos', (request, response) => {
  videoRepository.getVideos(request, response);
})

export {videosRoutes };
