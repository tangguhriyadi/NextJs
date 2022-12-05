import React, { useMemo } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Card, CardBody, CardHeader, CardTitle, Col, Label } from "reactstrap";

type Props = {
  count: number;
};

const SkeletonLoading: React.FC<Props> = ({ count }) => {
  const indent = useMemo(() => {
    let a = [];
    for (let i = 0; i < count; i++) {
      a.push(
        <Col key={i} className="d-flex justify-content-center" md="6">
          <SkeletonTheme baseColor="#ebebeb" highlightColor="#444">
            <Card
              className="my-2"
              style={{
                width: "22rem",
                color: "black",
              }}
            >
              <CardHeader>
                <Skeleton count={1} />
              </CardHeader>
              <CardBody>
                <CardTitle tag="h5">
                  <Skeleton count={2} />
                </CardTitle>
              </CardBody>
            </Card>
          </SkeletonTheme>
        </Col>
      );
    }
    return a;
  }, [count]);

  return <>{indent}</>;
};

export default SkeletonLoading;
