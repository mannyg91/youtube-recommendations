export const getElapsedTime = (rawDate) => {
  let date = new Date(rawDate);
  // let formattedDate = date.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric"
  // });

  let now = new Date();
  let timeDiff = now - date;
  let diffInMinutes = Math.round(timeDiff / (1000 * 60));
  let diffInHours = Math.round(timeDiff / (1000 * 60 * 60));
  let diffInDays = Math.round(timeDiff / (1000 * 60 * 60 * 24));
  let diffInWeeks = Math.round(timeDiff / (1000 * 60 * 60 * 24 * 7));
  let diffInMonths = Math.round(timeDiff / (1000 * 60 * 60 * 24 * 30));
  let diffInYears = Math.round(timeDiff / (1000 * 60 * 60 * 24 * 365));
  
  let timeAgo;
  if (diffInMinutes < 60) {
    timeAgo = diffInMinutes + " minutes ago";
  } else if (diffInHours < 24) {
    timeAgo = diffInHours + " hours ago";
  } else if (diffInDays < 7) {
    timeAgo = diffInDays + " days ago";
  } else if (diffInWeeks < 4) {
    timeAgo = diffInWeeks + " weeks ago";
  } else if (diffInMonths < 12) {
    timeAgo = diffInMonths + " months ago";
  } else {
    timeAgo = diffInYears + " years ago";
  }

  return timeAgo;

}