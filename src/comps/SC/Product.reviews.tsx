import { useState } from "react";
import { useMain } from "../../states/MainStates";
import "../../styles/Review.css";

function ProductReviews({ productTitle, idx }: { productTitle: string; idx: number }) {
  // Variables
  const [review, setReview] = useState("");
  const [showCommentOverlay, setShowCommentOverlay] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [editIdx, setEditIdx] = useState<number>(-1);
  const [edit, setEdit] = useState("");

  const {
    addAccountReview,
    addProductReview,
    addReview,
    reviews,
    deleteReview,
    editReview,
  } = useMain();

  const data = reviews.find((r) => r.productIndex === idx)?.reviews;

  // adds a review do i have to go into detail in these comments ?
  function handleAdd() {
    if (!review.trim()) return;

    const productExists = reviews.some((r) => r.productIndex === idx);

    if (!productExists) {
      addProductReview({ productIndex: idx, reviews: [review] });
    } else {
      addReview(review, idx);
    }

    addAccountReview({ review, productTitle, productIndex: idx });
    setReview("");
    setShowCommentBox(false);
  }

  // saves edit
  function handleSaveEdit(reviewIdx: number) {
    if (edit.trim().length === 0) return;

    editReview(idx, edit, reviewIdx);
    setEditIdx(-1);
    setEdit("");
  }

  // deletes review
  function handleDeleteReview(reviewIdx: number) {
    deleteReview(reviewIdx, idx);
  }

  return (
    <>
      <div className="main-pr-cont">
        <div className="main-pr-cont-header">
          <h3 className="left-mark-title">Customer Reviews for {productTitle}</h3>
          {data && data.length > 3 && (
            <button
              className="view-all-btn"
              onClick={() => setShowCommentOverlay(true)}
            >
              View All Reviews
            </button>
          )}
        </div>

        {(!data || data.length === 0) && (
          <div className="no-reviews">
            <p>No reviews yet. Be the first to share your thoughts!</p>
            <p className="write-review-btn p" onClick={() => setShowCommentBox(true)}>Write a Review</p>
          </div>
        )}

        <div className="pr-review-cont">
          {data?.slice(0, 3).map((r, i) => (
            <div className="review" key={i}>
              <div className="review-header">
                <span className="review-user">User</span>
                <span className="review-date">1 Minute Ago</span>
              </div>

              <p className="review-text">
                {editIdx === i ? (
                  <input
                    className="edit-review-input"
                    type="text"
                    value={edit}
                    onChange={(e) => setEdit(e.target.value)}
                    placeholder="Edit your review"
                  />
                ) : (
                  r
                )}
              </p>

              <div className="review-options-cont">
                <p
                  className="edit-review-txt"
                  onClick={() => {
                    if (editIdx === i) {
                      handleSaveEdit(i);
                    } else {
                      setEditIdx(i);
                      setEdit(r);
                    }
                  }}
                >
                  {editIdx === i ? "Save" : "Edit"}
                </p>
                <div className="small-tall-hr" />
                <p
                  className="delete-review-txt"
                  onClick={() =>
                    editIdx === i ? setEditIdx(-1) : handleDeleteReview(i)
                  }
                >
                  {editIdx === i ? "Cancel" : "Delete"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {(showCommentBox || data && data.length > 0) && (
          <div className="pr-input-cont">
            <textarea
              id="review-input"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
            />
            <div className="input-actions">
              <button onClick={handleAdd} className="write-review-btn">Submit Review</button>
              <button
                className="write-review-btn"
                onClick={() => {
                  setShowCommentBox(false);
                  setReview("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for all reviews */}
      <div
        className={`review-overlay ${showCommentOverlay ? "active" : ""}`}
        onClick={() => {
          setEditIdx(-1);
          setShowCommentOverlay(false);
        }}
      >
        <div
          className="overlay-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="overlay-header">
            <h3>All Reviews</h3>
            <button
              className="close-btn"
              onClick={() => {
                setEditIdx(-1);
                setShowCommentOverlay(false);
              }}
            >
              ✕
            </button>
          </div>
          <div className="overlay-reviews">
            {data?.map((r, i) => (
              <div className="review" key={i}>
                <div className="review-header">
                  <span className="review-user">User</span>
                  <span className="review-date">1 Minute Ago</span>
                </div>

                <p className="review-text">
                  {editIdx === i ? (
                    <input
                      className="edit-review-input"
                      type="text"
                      value={edit}
                      onChange={(e) => setEdit(e.target.value)}
                      placeholder="Edit your review"
                    />
                  ) : (
                    r
                  )}
                </p>

                <div className="review-options-cont">
                  <p
                    className="edit-review-txt"
                    onClick={() => {
                      if (editIdx === i) {
                        handleSaveEdit(i);
                      } else {
                        setEditIdx(i);
                        setEdit(r);
                      }
                    }}
                  >
                    {editIdx === i ? "Save" : "Edit"}
                  </p>
                  <div className="small-tall-hr" />
                  <p
                    className="delete-review-txt"
                    onClick={() => handleDeleteReview(i)}
                  >
                    Delete
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductReviews;
