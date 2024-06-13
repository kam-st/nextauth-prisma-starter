-- CreateTable
CREATE TABLE "AccessUrl" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "create" BOOLEAN NOT NULL DEFAULT false,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "update" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AccessUrl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccessApi" (
    "id" TEXT NOT NULL,
    "api" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "create" BOOLEAN NOT NULL DEFAULT false,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "update" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AccessApi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AccessUrl" ADD CONSTRAINT "AccessUrl_role_fkey" FOREIGN KEY ("role") REFERENCES "UserRole"("UserRole") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessApi" ADD CONSTRAINT "AccessApi_role_fkey" FOREIGN KEY ("role") REFERENCES "UserRole"("UserRole") ON DELETE RESTRICT ON UPDATE CASCADE;
