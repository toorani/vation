import { ExerciseDataModel } from "./ExerciseDataModel";
import Images from "../Shared/Images";


export default class SampleData implements ExerciseDataModel {
    title = 'Child’s pose';
    excerciseImage = Images.child_pose.exercise;
    attachments = Images.child_pose.attachments;
    description = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;
    difficulty = 3;
    iterations = 10;
    duration = 15;
}