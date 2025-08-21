import { useState } from "react";
import { useMain } from "../../states/MainStates";
import '../../styles/Review.css';

function ProductReviews({ productTitle, idx }: { productTitle: string; idx: number }) {
  const [review, setReview] = useState("");
  const [showCommentOverlay, setShowCommentOverlay] = useState(false);
  const [editIdx, setEditIdx] = useState<number>(-1);
  const [edit, setEdit] = useState('');
  const { addAccountReview, addProductReview, addReview, reviews, deleteReview, editReview } = useMain();

  const data = reviews.find(r => r.productIndex === idx)?.reviews;

  function handleAdd() {
    if (!review.trim()) return;

    const productExists = reviews.some(r => r.productIndex === idx);

    if (!productExists) {
      addProductReview({ productIndex: idx, reviews: [review] });
    } else {
      addReview(review, idx); 
    }

    addAccountReview({ review, productTitle, productIndex: idx });
    setReview('');
  }


  function handleSaveEdit(reviewIdx: number) {
    if (edit.trim().length === 0) return;

    editReview(idx, edit, reviewIdx);
    setEditIdx(-1);
    setEdit('');
  }

  // Delete review
  function handleDeleteReview(reviewIdx: number) {
  deleteReview(reviewIdx, idx);
  }

  return (
    <>
      <div className="main-pr-cont">
        <div className="main-pr-cont-header">
          <h3 className="left-mark-title">Reviews For {productTitle}</h3>
          {data && data.length > 3 && (
            <button className="view-all-btn" onClick={() => setShowCommentOverlay(true)}>
              View All Reviews
            </button>
          )}
        </div>

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
                <p className='delete-review-txt'
                onClick={() => editIdx === i ? setEditIdx(-1) : handleDeleteReview(i)}>{editIdx === i ? 'Cancel' : 'Delete'}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pr-input-cont">
          <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write a review..."
          />
          <button onClick={handleAdd}>Post</button>
        </div>
      </div>

      {/* Overlay */}
        <div className={`review-overlay  ${showCommentOverlay ? "active" : ""}`} onClick={() => {
        setEditIdx(-1)
        setShowCommentOverlay(false)
        }}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <div className="overlay-header">
              <h3>All Reviews</h3>
              <button className="close-btn" onClick={() => {
                setEditIdx(-1)
                setShowCommentOverlay(false)}}>✕</button>
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
                    <p className='delete-review-txt' onClick={() => handleDeleteReview(i)}>
                    Delete
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
  )
}

export default ProductReviews;
