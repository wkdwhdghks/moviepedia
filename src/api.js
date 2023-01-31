export async function getReviews() {
  const response = await fetch("https://learn.codeit.kr/3514/film-reviews");
  const body = await response.json();
  return body;
}
