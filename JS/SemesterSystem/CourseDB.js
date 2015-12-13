//structure	
    //this.course_title = "";
    // this.user_course_hours = 0;
    // this.user_grade = 0;
    // this.professor_name = "";
    // this.isTechElective = false;
    //this.average_grade = "";

    var course_list = [];

function create_courses()
{
	var course1 = new Course();
    course1.course_title = "CS 100";
    course1.user_course_hours = 1;
    course1.user_grade = 'A';
    course1.taken = 0;
    course1.professor_name = "Leonard Pitt";
    course1.isTechElective = false;
    course1.average_grade = 'A';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "Math 221";
    course1.user_course_hours = 3;
    course1.user_grade = 'B+';
    course1.taken = 0;
    course1.professor_name = "Chris Cunningham";
    course1.isTechElective = false;
    course1.average_grade = 'B';
    course_list.push(course1);

    var course1 = new Course();
    course1.course_title = "CS 233";
    course1.user_course_hours = 3;
    course1.user_grade = 'B+';
    course1.taken = 0;
    course1.professor_name = "Craig Zilles";
    course1.isTechElective = false;
    course1.average_grade = 'B';
    course_list.push(course1);

    var course1 = new Course();
    course1.course_title = "CS 242";
    course1.user_course_hours = 3;
    course1.user_grade = 'B+';
    course1.taken = 0;
    course1.professor_name = "Michael Woodley";
    course1.isTechElective = false;
    course1.average_grade = 'B-';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "Math 231";
    course1.user_course_hours = 3;
    course1.user_grade = 'B+';
    course1.taken = 0;
    course1.professor_name = "Randy McCarthy";
    course1.isTechElective = false;
    course1.average_grade = 'B';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "Math 241";
    course1.user_course_hours = 3;
    course1.user_grade = 'B-';
    course1.taken = 0;
    course1.professor_name = "Bronski, J";
    course1.isTechElective = false;
    course1.average_grade = 'B-';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "Math 415";
    course1.user_course_hours = 3;
    course1.user_grade = 'B+';
    course1.taken = 0;
    course1.professor_name = "Chris Cunningham";
    course1.isTechElective = false;
    course1.average_grade = 'B+';
    course_list.push(course1);

	var course1 = new Course();
	course1.course_title = "Stat 400";
    course1.user_course_hours = 4;
    course1.user_grade = 'A';
    course1.taken = 0;
    course1.professor_name = "Zhu, R";
    course1.isTechElective = false;
    course1.average_grade = 'B+';
    course_list.push(course1);    

	var course1 = new Course();
    course1.course_title = "Phys 211";
    course1.user_course_hours = 4;
    course1.user_grade = 'A';
    course1.taken = 0;
    course1.professor_name = "Mats Selen";
    course1.isTechElective = false;
    course1.average_grade = 'B+';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "Phys 212";
    course1.user_course_hours = 4;
    course1.user_grade = 'A-';
    course1.taken = 0;
    course1.professor_name = "Tim Stelzer";
    course1.isTechElective = false;
    course1.average_grade = 'B';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "Phys 213";
    course1.user_course_hours = 2;
    course1.taken = 0;
    course1.user_grade = 'B-';
    course1.professor_name = "Rafi Budakian";
    course1.isTechElective = false;
    course1.average_grade = 'B-';
    course_list.push(course1);

 	var course1 = new Course();
	course1.course_title = "Phys 214";
    course1.user_course_hours = 2;
    course1.user_grade = 'B';
    course1.taken = 0;
    course1.professor_name = "Rafi Budakian";
    course1.isTechElective = false;
    course1.average_grade = 'B-';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "CS 125";
    course1.user_course_hours = 3;
    course1.user_grade = 'A-';
    course1.taken = 0;
    course1.professor_name = "Lawrence Angrave";
    course1.isTechElective = false;
    course1.average_grade = 'B+';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "CS 225";
    course1.user_course_hours = 4;
    course1.user_grade = 'A';
    course1.taken = 0;
    course1.professor_name = "Cinda Heeren";
    course1.isTechElective = false;
    course1.average_grade = 'B';
    course_list.push(course1);

    var course1 = new Course();
    course1.course_title = "CS 173";
    course1.user_course_hours = 1;
    course1.user_grade = 'B';
    course1.taken = 0;
    course1.professor_name = "Margaret Fleck";
    course1.isTechElective = false;
    course1.average_grade = 'B+';
    course_list.push(course1);

    var course1 = new Course();
    course1.course_title = "CS 241";
    course1.user_course_hours = 1;
    course1.user_grade = 'B';
    course1.taken = 0;
    course1.professor_name = "Lawrence Angrave";
    course1.isTechElective = false;
    course1.average_grade = 'B+';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "CS 431";
    course1.user_course_hours = 3;
    course1.user_grade = 'B+';
    course1.taken = 0;
    course1.professor_name = "Lui Sha";
    course1.isTechElective = true;
    course1.average_grade = 'B-';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "CS 433";
    course1.user_course_hours = 3;
    course1.user_grade = 'B';
    course1.taken = 0;
    course1.professor_name = "Torrellas, J";
    course1.isTechElective = true;
    course1.average_grade = 'B';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "CS 438";
    course1.user_course_hours = 3;
    course1.user_grade = 'B';
    course1.taken = 0;
    course1.professor_name = "Roy Choudhary";
    course1.isTechElective = true;
    course1.average_grade = 'B';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "CS 461";
    course1.user_course_hours = 3;
    course1.user_grade = 'A';
    course1.taken = 0;
    course1.professor_name = "Michael Bailey";
    course1.isTechElective = true;
    course1.average_grade = 'B+';
    course_list.push(course1);
    
	var course1 = new Course();
    course1.course_title = "CS 465";
    course1.user_course_hours = 3;
    course1.user_grade = 'A-';
    course1.taken = 0;
    course1.professor_name = "Wai-Tat Fu";
    course1.isTechElective = true;
    course1.average_grade = 'B+';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "CS 425";
    course1.user_course_hours = 3;
    course1.user_grade = 'B+';
    course1.taken = 0;
    course1.professor_name = "Nitin Vaidya";
    course1.isTechElective = true;
    course1.average_grade = 'B+';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "CS 424";
    course1.user_course_hours = 3;
    course1.user_grade = 'A+';
    course1.taken = 0;
    course1.professor_name = "Abdelzaher, T";
    course1.isTechElective = true;
    course1.average_grade = 'A-';
    course_list.push(course1);

	var course1 = new Course();
    course1.course_title = "CS 422";
    course1.user_course_hours = 3;
    course1.user_grade = 'B-';
    course1.taken = 0;
    course1.professor_name = "Elsa Gunter";
    course1.isTechElective = true;
    course1.average_grade = 'B';
    course_list.push(course1);

    return course_list;
}
